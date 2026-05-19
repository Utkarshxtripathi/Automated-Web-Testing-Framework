from fastapi import APIRouter
from fastapi.responses import HTMLResponse
import os

router = APIRouter()

@router.get("/allure-report")
def get_allure_report():
    # In a real scenario, this would serve the index.html from allure-report folder.
    # For now, it returns a mockup HTML response.
    return HTMLResponse(content="<h1>Allure Report Mockup</h1><p>Reports will be generated here.</p>")
