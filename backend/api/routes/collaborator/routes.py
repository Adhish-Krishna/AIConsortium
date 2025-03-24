from fastapi import Depends, HTTPException, status, Response
from sqlalchemy.orm import Session
from typing import List
import uuid
from passlib.context import CryptContext

from api.routes.user.auth import get_current_user
from database.connect import get_db
from api.routes.collaborator import collaborator_router
from api.models.collaboratorsModel import CollaboratorCreate, CollaboratorResponse, CollaboratorUpdate
from database.schemas.UserSchema import Collaborator
from database.schemas.UserSchema import User
from api.routes.collaborator.auth import get_current_collaborator

# Password hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@collaborator_router.post("/", response_model=CollaboratorResponse, status_code=status.HTTP_201_CREATED)
def create_collaborator(collaborator: CollaboratorCreate, db: Session = Depends(get_db)):
    """Create a new collaborator"""
    # Check if email already exists
    existing_email = db.query(Collaborator).filter(Collaborator.email == collaborator.email).first()
    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
        
    db_collaborator = Collaborator(
        user_id=uuid.uuid4(),
        user_name=collaborator.user_name,
        email=collaborator.email,
        password=pwd_context.hash(collaborator.password),  # Hash the password
        first_name=collaborator.first_name,
        last_name=collaborator.last_name,
        phone=collaborator.phone,
        profile_image=collaborator.profile_image,
        bio=collaborator.bio,
        user_type="collaborator",
        industry_name=collaborator.industry_name,
        industry_role=collaborator.industry_role,
        industry_type=collaborator.industry_type,
        partnership_start_date=collaborator.partnership_start_date,
        partnership_end_date=collaborator.partnership_end_date,
        collaboration_type=collaborator.collaboration_type,
        website=collaborator.website,
        projects=collaborator.projects
    )
    
    db.add(db_collaborator)
    db.commit()
    db.refresh(db_collaborator)
    return db_collaborator

@collaborator_router.get("/me", response_model=CollaboratorResponse)
def get_current_collaborator_profile(current_user: User = Depends(get_current_collaborator)):
    """Get current collaborator profile"""
    return current_user

@collaborator_router.get("/{email}", response_model=CollaboratorResponse)
def get_collaborator(
    email: str, 
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Get collaborator by ID"""
    collaborator = db.query(Collaborator).filter(Collaborator.email == email).first()
    if not collaborator:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Collaborator not found"
        )
    return collaborator

@collaborator_router.get("/", response_model=List[CollaboratorResponse])
def get_collaborators(
    skip: int = 0, 
    limit: int = 100, 
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """Get all collaborators with pagination"""
    collaborators = db.query(Collaborator).offset(skip).limit(limit).all()
    return collaborators

@collaborator_router.put("/", response_model=CollaboratorResponse)
def update_collaborator(
    collaborator_update: CollaboratorUpdate, 
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_collaborator)
):
    """Update collaborator information"""
    db_collaborator = db.query(Collaborator).filter(Collaborator.email == current_user.email).first()
    if not db_collaborator:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Collaborator not found"
        )
    
    update_data = collaborator_update.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_collaborator, key, value)
    
    db.commit()
    db.refresh(db_collaborator)
    return db_collaborator

@collaborator_router.delete("/", status_code=status.HTTP_204_NO_CONTENT)
def delete_collaborator(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_collaborator)
):
    """Delete a collaborator"""
    db_collaborator = db.query(Collaborator).filter(Collaborator.email == current_user.email).first()
    if not db_collaborator:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Collaborator not found"
        )
    
    db.delete(db_collaborator)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
