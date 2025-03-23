from typing import Optional, List, Dict, Any
from pydantic import BaseModel, EmailStr
from datetime import datetime
from .usersModel import UserBase, UserCreate, UserUpdate, UserResponse

class AlumniBase(UserBase):
    graduation_year: Optional[int] = None
    department: Optional[str] = None
    degree: Optional[str] = None
    current_company: Optional[str] = None
    current_position: Optional[str] = None
    linkedin_profile: Optional[str] = None
    achievements: Optional[List[Dict[str, Any]]] = []
    user_type: str = "alumni"

class AlumniCreate(UserCreate, AlumniBase):
    pass

class AlumniUpdate(UserUpdate):
    graduation_year: Optional[int] = None
    department: Optional[str] = None
    degree: Optional[str] = None
    current_company: Optional[str] = None
    current_position: Optional[str] = None
    linkedin_profile: Optional[str] = None
    achievements: Optional[List[Dict[str, Any]]] = None

class AlumniResponse(UserResponse, AlumniBase):
    alumni_id: str  # Add this field to match the database model
    
    class Config:
        from_attributes = True  # Updated from orm_mode = True
