from time import time
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    """
    Settings class for application configuration.

    Inherits from:
        BaseSettings (pydantic_settings.BaseSettings): Pydantic BaseSettings class for environment variable management.
    """
    
    PORT: int = 3000
    NODE_ENV: str = "development"
    API_URL: str = "http://localhost:3000"
    FRONTEND_URL: str = "http://localhost:5000"

    # PostgreSQL Database Configuration
    POSTGRES_HOST: str 
    POSTGRES_PORT: int 
    POSTGRES_DB: str 
    POSTGRES_USER: str 
    POSTGRES_PASSWORD: str 
    DATABASE_URL: str = "postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DB}"

    # Authentication
    JWT_SECRET:str
    JWT_EXPIRES_IN:str = '7d'
    REFRESH_TOKEN_SECRET:str
    REFRESH_TOKEN_EXPIRES_IN:str='30d'

    # Logging
    # LOG_LEVEL=debug

    # CORS Configuration
    CORS_ORIGIN:str='http://localhost:5000'
    # Email Configuration (if needed)
    # SMTP_HOST=smtp.example.com
    # SMTP_PORT=587
    # SMTP_USER=your_email@example.com
    # SMTP_PASSWORD=your_email_password
    # EMAIL_FROM=noreply@example.com

    # File Upload (if needed)
    UPLOAD_DIR:str='uploads'
    MAX_FILE_SIZE:int= 5000000

    # API Rate Limiting
    RATE_LIMIT_WINDOW_MS:int= 900000
    RATE_LIMIT_MAX :int= 10

    class Config:
        env_file = '.env'
        extras = 'allow' 


settings = Settings()