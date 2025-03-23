from typing import Optional
from pydantic import BaseModel
from datetime import datetime
from uuid import UUID

class EventRegistrationBase(BaseModel):
    student_id: UUID
    event_id: UUID
    attendance_status: Optional[str] = "registered"
    payment_status: Optional[str] = "NILL"
    certificate_issued: Optional[int] = 0
    feedback: Optional[str] = None

class EventRegistrationCreate(EventRegistrationBase):
    pass

class EventRegistrationUpdate(BaseModel):
    attendance_status: Optional[str] = None
    payment_status: Optional[str] = None
    certificate_issued: Optional[int] = None
    feedback: Optional[str] = None

class EventRegistrationResponse(EventRegistrationBase):
    event_registration_id: UUID
    registration_date: datetime
    
    class Config:
        orm_mode = True
