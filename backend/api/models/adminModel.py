from typing import Optional, List, Dict, Any
from pydantic import BaseModel, EmailStr
from datetime import datetime
from .usersModel import UserBase, UserCreate, UserUpdate, UserResponse

class AdminBase(UserBase):
    permissions: Optional[Dict[str, Any]] = {}
    dashboard_access: Optional[bool] = True
    can_manage_users: Optional[bool] = True
    can_manage_events: Optional[bool] = True
    can_manage_content: Optional[bool] = True
    user_type: str = "admin"

class AdminCreate(UserCreate, AdminBase):
    pass

class AdminUpdate(UserUpdate):
    permissions: Optional[Dict[str, Any]] = None
    dashboard_access: Optional[bool] = None
    can_manage_users: Optional[bool] = None
    can_manage_events: Optional[bool] = None
    can_manage_content: Optional[bool] = None

class AdminResponse(UserResponse, AdminBase):
    # Inherits all fields from UserResponse and AdminBase
    class Config:
        orm_mode = True
