from typing import Optional, List, Dict, Any
from pydantic import BaseModel
from datetime import datetime

class EventBase(BaseModel):
    title: str
    description: Optional[str] = None
    event_type: Optional[str] = None
    start_date: datetime
    end_date: datetime
    venue: Optional[str] = None
    capacity: Optional[int] = None
    registration_deadline: Optional[datetime] = None
    registration_fee: Optional[float] = 0.0
    organizers: Optional[List[Dict[str, Any]]] = []
    speakers: Optional[List[Dict[str, Any]]] = []
    agenda: Optional[List[Dict[str, Any]]] = []
    prerequisites: Optional[str] = None
    images: Optional[List[str]] = []
    certificate_provided: Optional[int] = 0
    is_featured: Optional[int] = 0
    status: Optional[str] = "upcoming"

class EventCreate(EventBase):
    pass

class EventUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    event_type: Optional[str] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    venue: Optional[str] = None
    capacity: Optional[int] = None
    registration_deadline: Optional[datetime] = None
    registration_fee: Optional[float] = None
    organizers: Optional[List[Dict[str, Any]]] = None
    speakers: Optional[List[Dict[str, Any]]] = None
    agenda: Optional[List[Dict[str, Any]]] = None
    prerequisites: Optional[str] = None
    images: Optional[List[str]] = None
    certificate_provided: Optional[int] = None
    is_featured: Optional[int] = None
    status: Optional[str] = None

class EventResponse(EventBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True
