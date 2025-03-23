from fastapi import APIRouter

student_router = APIRouter(
    tags=["Student Routes"]
)

from api.routes.student import routes
