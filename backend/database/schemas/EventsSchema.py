from sqlalchemy import Column, Integer, Float, String, Text, DateTime, ForeignKey, UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database.connect import Base
from sqlalchemy import JSON

class Event(Base):
    __tablename__ = "events"
    
    event_id = Column(UUID, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    description = Column(Text)
    event_type = Column(String(50))  # workshop, seminar, hackathon, etc.
    start_date = Column(DateTime(timezone=True), nullable=False)
    end_date = Column(DateTime(timezone=True), nullable=False)
    venue = Column(String(100))
    capacity = Column(Integer)
    registration_deadline = Column(DateTime(timezone=True))
    registration_fee = Column(Float, default=0.0)
    organizers = Column(JSON, default=list)
    speakers = Column(JSON, default=list)
    agenda = Column(JSON, default=list)
    prerequisites = Column(Text)
    images = Column(JSON, default=list)
    certificate_provided = Column(Integer, default=0)
    is_featured = Column(Integer, default=0)
    status = Column(String(20), default="upcoming")  # upcoming, ongoing, completed, cancelled
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    attendees = relationship("EventRegistration", back_populates="event")

class EventRegistration(Base):
    __tablename__ = "event_registrations"
    
    event_registration_id = Column(UUID, primary_key=True, index=True)
    student_id = Column(UUID, ForeignKey("students.student_id"))
    event_id = Column(UUID, ForeignKey("events.event_id"))
    registration_date = Column(DateTime(timezone=True), server_default=func.now())
    attendance_status = Column(String(20), default="registered")  # registered, attended, no-show
    payment_status = Column(String(20), default="NILL")  # pending, completed, refunded
    certificate_issued = Column(Integer, default=0)
    feedback = Column(Text)
    
    # Instead of directly importing, use strings for late binding
    student = relationship("Student", back_populates="events")
    event = relationship("Event", back_populates="attendees")