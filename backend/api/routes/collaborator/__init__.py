from fastapi import APIRouter

collaborator_router = APIRouter(
    tags=["Collaborator Routes"]
)

from api.routes.collaborator import routes
