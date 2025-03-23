from sqlalchemy import Boolean, Column, Integer, Float, String, Text, DateTime, ForeignKey, UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database.connect import Base
from sqlalchemy import JSON
from .EventsSchema import EventRegistration

#BASE user class
class User(Base):
    
    __tablename__ = 'users'

    user_id = Column(UUID , primary_key=True, index = True)
    user_name = Column(String(50), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    first_name = Column(String(50))
    last_name = Column(String(50))
    phone = Column(String(20))
    profile_image = Column(String(255))
    bio = Column(Text)
    is_active = Column(Integer, default=1)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    last_login = Column(DateTime(timezone=True))
    user_type = Column(String(20), nullable=False)

    __mapper_args__ = {
        'polymorphic_on':user_type,
        'polymorphic_identity':'user'
    }


# ADMIN
class Admin(User):
    __tablename__ = "admins"
    
    admin_id = Column(UUID, ForeignKey("users.user_id"), primary_key=True)
    permissions = Column(JSON, default=dict)
    dashboard_access = Column(Boolean, default=True)
    can_manage_users = Column(Boolean, default=True)
    can_manage_events = Column(Boolean, default=True)
    can_manage_content = Column(Boolean, default=True)
    
    __mapper_args__ = {
        "polymorphic_identity": "admin",
    }

# COLLABORATORS
class Collaborator(User):
    __tablename__ = 'colaborators'

    colab_id = Column(UUID, ForeignKey("users.user_id"), primary_key=True)
    industry_name = Column(String(255))
    industry_role = Column(String(255))
    industry_type = Column(String(100))
    partnership_start_date = Column(DateTime(timezone=True))
    partnership_end_date = Column(DateTime(timezone=True))
    collaboration_type = Column(String(100))
    website = Column(String(255))
    projects = Column(JSON, default=list)
    
    __mapper_args__ = {
        "polymorphic_identity": "collaborator",
    }

# ALUMNI
class Alumni(User):
    __tablename__ = "alumni"
    
    alumni_id = Column(UUID, ForeignKey("users.user_id"), primary_key=True)
    graduation_year = Column(Integer)
    department = Column(String(100))
    degree = Column(String(100))
    current_company = Column(String(100))
    current_position = Column(String(100))
    linkedin_profile = Column(String(255))
    achievements = Column(JSON, default=list)
    
    __mapper_args__ = {
        "polymorphic_identity": "alumni",
    }


# STUDENTS
class Student(User):
    __tablename__ = "students"
    
    student_id = Column(UUID, ForeignKey("users.user_id"), primary_key=True)
    register_number = Column(String(20), unique=True)
    department = Column(String(100))
    year_of_study = Column(Integer)
    skills = Column(JSON, default=list)
    interests = Column(JSON, default=list)
    # Use string for late binding to avoid circular import
    events = relationship("EventRegistration", back_populates="student")

    __mapper_args__ = {
        "polymorphic_identity": "student",
    }
