from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import crud, models, schemas
from ..database import get_db

router = APIRouter()

@router.post("/", response_model=schemas.BugReport)
def create_bug_report(bug_report: schemas.BugReportCreate, db: Session = Depends(get_db)):
    return crud.create_bug_report(db=db, bug_report=bug_report)

@router.get("/", response_model=List[schemas.BugReport])
def read_bug_reports(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    bug_reports = crud.get_bug_reports(db, skip=skip, limit=limit)
    return bug_reports
