from typing import Optional, List, Dict, Any
from pydantic import BaseModel
from datetime import datetime

class ProjectBase(BaseModel):
    title: str
    description: Optional[str] = None
    future_scope: Optional[str] = None
    links: Optional[List[str]] = []
    images: Optional[List[str]] = []
    github_url: Optional[str] = None
    status: Optional[str] = None
    team_members: Optional[List[Dict[str, Any]]] = []
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    project_type: Optional[str] = None
    technologies: Optional[List[str]] = []
    funding_source: Optional[str] = None
    funding_amount: Optional[int] = None
    tags: Optional[List[str]] = []
    license_type: Optional[str] = None
    video_url: Optional[str] = None
    presentation_url: Optional[str] = None

class ProjectCreate(ProjectBase):
    pass

class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    future_scope: Optional[str] = None
    links: Optional[List[str]] = None
    images: Optional[List[str]] = None
    github_url: Optional[str] = None
    status: Optional[str] = None
    team_members: Optional[List[Dict[str, Any]]] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    project_type: Optional[str] = None
    technologies: Optional[List[str]] = None
    funding_source: Optional[str] = None
    funding_amount: Optional[int] = None
    tags: Optional[List[str]] = None
    license_type: Optional[str] = None
    video_url: Optional[str] = None
    presentation_url: Optional[str] = None

class ProjectResponse(ProjectBase):
    project_id: str
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True
