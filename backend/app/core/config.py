from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Automated Web Testing Framework"
    DATABASE_URL: str = "postgresql://user:password@localhost/test_db"
    REDIS_URL: str = "redis://localhost:6379/0"
    CLERK_SECRET_KEY: str = ""

    class Config:
        env_file = ".env"

settings = Settings()
