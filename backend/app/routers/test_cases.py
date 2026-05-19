from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import crud, models, schemas
from ..database import get_db

router = APIRouter()

@router.post("/", response_model=schemas.TestCase)
def create_test_case(test_case: schemas.TestCaseCreate, db: Session = Depends(get_db)):
    return crud.create_test_case(db=db, test_case=test_case)

@router.get("/", response_model=List[schemas.TestCase])
def read_test_cases(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    test_cases = crud.get_test_cases(db, skip=skip, limit=limit)
    return test_cases

@router.get("/{test_id}", response_model=schemas.TestCase)
def read_test_case(test_id: int, db: Session = Depends(get_db)):
    db_test_case = crud.get_test_case(db, test_id=test_id)
    if db_test_case is None:
        raise HTTPException(status_code=404, detail="Test case not found")
    return db_test_case
