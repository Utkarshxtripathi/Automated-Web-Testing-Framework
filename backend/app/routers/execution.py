from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import crud, models, schemas
from ..database import get_db
from ..worker.test_execution import run_test_task

router = APIRouter()

@router.post("/", response_model=schemas.ExecutionReport)
def create_execution_report(execution_report: schemas.ExecutionReportCreate, db: Session = Depends(get_db)):
    return crud.create_execution_report(db=db, execution_report=execution_report)

@router.get("/", response_model=List[schemas.ExecutionReport])
def read_execution_reports(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    reports = crud.get_execution_reports(db, skip=skip, limit=limit)
    return reports

@router.post("/trigger/{test_id}/{module_name}")
def trigger_test_execution(test_id: int, module_name: str):
    task = run_test_task.delay(test_id, module_name)
    return {"message": f"Test {test_id} ({module_name}) execution triggered", "job_id": task.id}

@router.get("/status/{job_id}")
def get_execution_status(job_id: str):
    # Retrieve task status from Celery
    from ..core.celery_app import celery_app
    task_result = celery_app.AsyncResult(job_id)
    return {"job_id": job_id, "status": task_result.status, "result": task_result.result}
