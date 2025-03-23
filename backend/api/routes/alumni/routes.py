from fastapi import Depends, HTTPException, status, Response
from sqlalchemy.orm import Session
from typing import List
import uuid

from database.connect import get_db
from api.routes.alumni import alumni_router
from api.models.alumniModel import AlumniCreate, AlumniResponse, AlumniUpdate
from database.schemas.UserSchema import Alumni, User
from api.routes.alumni.auth import get_current_alumni

from passlib.context import CryptContext
import re

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@alumni_router.post("/", response_model=AlumniResponse, status_code=status.HTTP_201_CREATED)
def create_alumni(alumni: AlumniCreate, db: Session = Depends(get_db)):
    """Create a new alumni"""
    # Check if email already exists
    existing_email = db.query(Alumni).filter(Alumni.email == alumni.email).first()
    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Check if username already exists
    existing_username = db.query(Alumni).filter(Alumni.user_name == alumni.user_name).first()
    if existing_username:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already taken"
        )
    
    # Basic email validation
    email_pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    if not re.match(email_pattern, alumni.email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid email format"
        )
    
    try:
        db_alumni = Alumni(
            user_id=uuid.uuid4(),
            user_name=alumni.user_name,
            email=alumni.email,
            password=pwd_context.hash(alumni.password),  # Hashing the password
            first_name=alumni.first_name,
            last_name=alumni.last_name,
            phone=alumni.phone,
            profile_image=alumni.profile_image,
            bio=alumni.bio,
            user_type="alumni",
            graduation_year=alumni.graduation_year,
            department=alumni.department,
            degree=alumni.degree,
            current_company=alumni.current_company,
            current_position=alumni.current_position,
            linkedin_profile=alumni.linkedin_profile,
            achievements=alumni.achievements
        )
        
        db.add(db_alumni)
        db.commit()
        db.refresh(db_alumni)
        return db_alumni
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred: {str(e)}"
        )

@alumni_router.get("/me", response_model=AlumniResponse)
def get_current_alumni_profile(current_user: User = Depends(get_current_alumni)):
    """Get current alumni profile"""
    return current_user

@alumni_router.get("/{alumni_id}", response_model=AlumniResponse)
def get_alumni(
    alumni_id: uuid.UUID, 
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_alumni)
):
    """Get alumni by ID"""
    alumni = db.query(Alumni).filter(Alumni.alumni_id == alumni_id).first()
    if not alumni:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Alumni not found"
        )
    return alumni

@alumni_router.get("/", response_model=List[AlumniResponse])
def get_all_alumni(
    skip: int = 0, 
    limit: int = 100, 
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_alumni)
):
    """Get all alumni with pagination"""
    alumni_list = db.query(Alumni).offset(skip).limit(limit).all()
    return alumni_list

@alumni_router.put("/{alumni_id}", response_model=AlumniResponse)
def update_alumni(
    alumni_id: uuid.UUID, 
    alumni_update: AlumniUpdate, 
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_alumni)
):
    """Update alumni information"""
    db_alumni = db.query(Alumni).filter(Alumni.alumni_id == alumni_id).first()
    if not db_alumni:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Alumni not found"
        )
    
    update_data = alumni_update.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_alumni, key, value)
    
    db.commit()
    db.refresh(db_alumni)
    return db_alumni

@alumni_router.delete("/{alumni_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_alumni(
    alumni_id: uuid.UUID, 
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_alumni)
):
    """Delete an alumni"""
    db_alumni = db.query(Alumni).filter(Alumni.alumni_id == alumni_id).first()
    if not db_alumni:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Alumni not found"
        )
    
    db.delete(db_alumni)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
