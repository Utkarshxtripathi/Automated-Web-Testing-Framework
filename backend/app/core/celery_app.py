import os
from celery import Celery
from .config import settings

celery_app = Celery(
    "worker",
    broker=settings.REDIS_URL,
    backend=settings.REDIS_URL,
    include=["app.worker.test_execution"]
)

celery_app.conf.task_routes = {
    "app.worker.test_execution.run_test_task": "test-queue"
}

celery_app.conf.update(task_track_started=True)
