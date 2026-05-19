from ..core.celery_app import celery_app
from ..tests.module_1_login import LoginTest
from ..tests.module_2_signup import SignupTest
from ..tests.module_3_payment import PaymentTest
from ..database import SessionLocal
from .. import crud, schemas
import time
import os

@celery_app.task(name="app.worker.test_execution.run_test_task", bind=True)
def run_test_task(self, test_id: int, module_name: str):
    self.update_state(state='PROGRESS', meta={'status': 'Running test...'})
    
    start_time = time.time()
    db = SessionLocal()
    
    try:
        if module_name == "login":
            test = LoginTest()
            success, message = test.run_positive_test()
        elif module_name == "signup":
            test = SignupTest()
            success, message = test.run_test()
        elif module_name == "payment":
            test = PaymentTest()
            success, message = test.run_test()
        else:
            success = False
            message = "Unknown module"

        duration = time.time() - start_time

        # If failed, create Bug Report
        if not success:
            screenshot_path = message.split("Screenshot: ")[-1] if "Screenshot: " in message else None
            crud.create_bug_report(db, schemas.BugReportCreate(
                severity="High",
                module=module_name,
                description=message,
                screenshot_url=screenshot_path
            ))

        # Update Execution Report
        crud.create_execution_report(db, schemas.ExecutionReportCreate(
            total_tests=1,
            passed=1 if success else 0,
            failed=0 if success else 1,
            duration=duration
        ))

        return {"status": "completed", "success": success, "message": message, "duration": duration}
    finally:
        db.close()

