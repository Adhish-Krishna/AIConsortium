from fastapi import APIRouter

api_router = APIRouter()

from api.routes import user, student, collaborator, alumni

api_router.include_router(user.auth_router, prefix="/auth")
api_router.include_router(student.student_router, prefix="/students")
api_router.include_router(collaborator.collaborator_router, prefix="/collaborators")
api_router.include_router(alumni.alumni_router, prefix="/alumni")
