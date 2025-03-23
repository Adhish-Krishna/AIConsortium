from fastapi import APIRouter

alumni_router = APIRouter(
    tags=["Alumni Routes"]
)

from api.routes.alumni import routes
