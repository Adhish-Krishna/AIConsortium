from typing import Optional, List, Dict, Any
from uuid import UUID
from pydantic import BaseModel, EmailStr
from datetime import datetime
from .usersModel import UserBase, UserCreate, UserUpdate, UserResponse

class StudentBase(UserBase):
    register_number: str
    department: Optional[str] = None
    year_of_study: Optional[int] = None
    skills: Optional[List[str]] = []
    interests: Optional[List[str]] = []
    user_type: str = "student"

class StudentCreate(UserCreate, StudentBase):
    pass

class StudentUpdate(UserUpdate):
    register_number: Optional[str] = None
    department: Optional[str] = None
    year_of_study: Optional[int] = None
    section: Optional[str] = None
    cgpa: Optional[float] = None
    skills: Optional[List[str]] = None
    interests: Optional[List[str]] = None


class StudentResponse(BaseModel):
    user_id: UUID
    user_name: str
    email: str
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    phone: Optional[str] = None
    profile_image: Optional[str] = None
    bio: Optional[str] = None
    is_active: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    last_login: Optional[datetime] = None
    user_type: str

    # Student-specific fields
    student_id: UUID
    register_number: str
    department: str
    year_of_study: int
    skills: List[str]
    interests: List[str]

    class Config:
        orm_mode = True  # Ensures it works with SQLAlchemy models
        from_attributes = True

