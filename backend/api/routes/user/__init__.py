from fastapi import APIRouter

auth_router = APIRouter(
    tags=["Authentication Routes"]
)

from api.routes.user import auth