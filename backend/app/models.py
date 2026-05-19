from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Float
from sqlalchemy.orm import relationship
from datetime import datetime
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    clerk_id = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    role = Column(String, default="user")

class TestCase(Base):
    __tablename__ = "test_cases"

    test_id = Column(Integer, primary_key=True, index=True)
    test_name = Column(String, index=True)
    module = Column(String, index=True)
    status = Column(String, default="pending")  # pending, running, passed, failed

class BugReport(Base):
    __tablename__ = "bug_reports"

    bug_id = Column(Integer, primary_key=True, index=True)
    severity = Column(String)  # Critical, High, Medium, Low
    module = Column(String)
    description = Column(String)
    screenshot_url = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class ExecutionReport(Base):
    __tablename__ = "execution_reports"

    execution_id = Column(Integer, primary_key=True, index=True)
    total_tests = Column(Integer, default=0)
    passed = Column(Integer, default=0)
    failed = Column(Integer, default=0)
    duration = Column(Float, default=0.0)
    created_at = Column(DateTime, default=datetime.utcnow)
