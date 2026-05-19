from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class TestCaseBase(BaseModel):
    test_name: str
    module: str
    status: Optional[str] = "pending"

class TestCaseCreate(TestCaseBase):
    pass

class TestCase(TestCaseBase):
    test_id: int

    class Config:
        from_attributes = True

class BugReportBase(BaseModel):
    severity: str
    module: str
    description: str
    screenshot_url: Optional[str] = None

class BugReportCreate(BugReportBase):
    pass

class BugReport(BugReportBase):
    bug_id: int
    created_at: datetime

    class Config:
        from_attributes = True

class ExecutionReportBase(BaseModel):
    total_tests: int = 0
    passed: int = 0
    failed: int = 0
    duration: float = 0.0

class ExecutionReportCreate(ExecutionReportBase):
    pass

class ExecutionReport(ExecutionReportBase):
    execution_id: int
    created_at: datetime

    class Config:
        from_attributes = True
