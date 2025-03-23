from typing import Optional, List, Dict, Any
from uuid import UUID
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime

# Base schema with shared attributes
class UserBase(BaseModel):
    user_name: str
    email: EmailStr
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    phone: Optional[str] = None
    bio: Optional[str] = None
    user_type: str = "user"

# Schema for creating a user
class UserCreate(UserBase):
    password: str
    profile_image: Optional[str] = None

# Schema for updating a user
class UserUpdate(BaseModel):
    user_name: Optional[str] = None
    email: Optional[EmailStr] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    phone: Optional[str] = None
    profile_image: Optional[str] = None
    bio: Optional[str] = None
    is_active: Optional[int] = None
    password: Optional[str] = None

# Schema for user responses
class UserResponse(UserBase):
    user_id: UUID  # Changed from 'id' to 'user_id' to match the database model
    profile_image: Optional[str] = None
    is_active: int
    created_at: datetime
    updated_at: Optional[datetime] = None
    last_login: Optional[datetime] = None

    class Config:
        from_attributes = True  # Updated from orm_mode = True

# Token schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None
    user_id: Optional[str] = None
    user_type: Optional[str] = None
