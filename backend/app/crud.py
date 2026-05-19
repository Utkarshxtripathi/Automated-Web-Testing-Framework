from sqlalchemy.orm import Session
from . import models, schemas

def get_test_case(db: Session, test_id: int):
    return db.query(models.TestCase).filter(models.TestCase.test_id == test_id).first()

def get_test_cases(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.TestCase).offset(skip).limit(limit).all()

def create_test_case(db: Session, test_case: schemas.TestCaseCreate):
    db_test_case = models.TestCase(**test_case.model_dump())
    db.add(db_test_case)
    db.commit()
    db.refresh(db_test_case)
    return db_test_case

def update_test_case_status(db: Session, test_id: int, status: str):
    db_test_case = db.query(models.TestCase).filter(models.TestCase.test_id == test_id).first()
    if db_test_case:
        db_test_case.status = status
        db.commit()
        db.refresh(db_test_case)
    return db_test_case

def get_bug_reports(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.BugReport).offset(skip).limit(limit).all()

def create_bug_report(db: Session, bug_report: schemas.BugReportCreate):
    db_bug_report = models.BugReport(**bug_report.model_dump())
    db.add(db_bug_report)
    db.commit()
    db.refresh(db_bug_report)
    return db_bug_report

def get_execution_reports(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.ExecutionReport).offset(skip).limit(limit).all()

def create_execution_report(db: Session, execution_report: schemas.ExecutionReportCreate):
    db_execution_report = models.ExecutionReport(**execution_report.model_dump())
    db.add(db_execution_report)
    db.commit()
    db.refresh(db_execution_report)
    return db_execution_report
