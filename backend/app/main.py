from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routers import test_cases, bug_reports, execution, reports
from .core.config import settings

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.PROJECT_NAME)

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for dev; update in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(test_cases.router, prefix="/api/test-cases", tags=["test_cases"])
app.include_router(bug_reports.router, prefix="/api/bug-reports", tags=["bug_reports"])
app.include_router(execution.router, prefix="/api/execution", tags=["execution"])
app.include_router(reports.router, prefix="/api/reports", tags=["reports"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Automated Web Testing Framework API"}
