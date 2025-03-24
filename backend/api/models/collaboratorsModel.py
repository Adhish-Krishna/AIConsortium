from typing import Optional, List, Dict, Any
from uuid import UUID
from pydantic import BaseModel, EmailStr
from datetime import datetime
from .usersModel import UserBase, UserCreate, UserUpdate, UserResponse

class CollaboratorBase(UserBase):
    industry_name: Optional[str] = None
    industry_role: Optional[str] = None
    industry_type: Optional[str] = None
    partnership_start_date: Optional[datetime] = None
    partnership_end_date: Optional[datetime] = None
    collaboration_type: Optional[str] = None
    website: Optional[str] = None
    projects: Optional[List[Dict[str, Any]]] = []
    user_type: str = "collaborator"

class CollaboratorCreate(UserCreate, CollaboratorBase):
    pass

class CollaboratorUpdate(UserUpdate):
    industry_name: Optional[str] = None
    industry_role: Optional[str] = None
    industry_type: Optional[str] = None
    partnership_start_date: Optional[datetime] = None
    partnership_end_date: Optional[datetime] = None
    collaboration_type: Optional[str] = None
    website: Optional[str] = None
    projects: Optional[List[Dict[str, Any]]] = None

class CollaboratorResponse(UserResponse, CollaboratorBase):
    colab_id: UUID  # Add this field to match the database model
    
    class Config:
        from_attributes = True  # Updated from orm_mode = True
