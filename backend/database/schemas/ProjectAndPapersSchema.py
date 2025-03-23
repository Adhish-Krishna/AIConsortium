
from sqlalchemy import Boolean, Column, Integer, Float, String, Text, DateTime, ForeignKey, UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database.connect import Base
from sqlalchemy import JSON

class Project(Base):
    __tablename__ = "projects"
        
    project_id = Column(UUID, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    description = Column(Text)
    future_scope = Column(Text)  
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    links = Column(JSON, default=list)
    images = Column(JSON, default=list)  
    github_url = Column(String(255))
    status = Column(String(50))
    team_members = Column(JSON, default=list)
        # Additional Project attributes
    start_date = Column(DateTime(timezone=True))
    end_date = Column(DateTime(timezone=True))
    project_type = Column(String(100))  # research, development, etc.
    technologies = Column(JSON, default=list)  # tech stack used
    funding_source = Column(String(255))
    funding_amount = Column(Integer)
    tags = Column(JSON, default=list)
    license_type = Column(String(100))
    video_url = Column(String(255))
    presentation_url = Column(String(255))


class Publication(Base):
    __tablename__ = "publications"
    
    publication_id = Column(UUID, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    abstract = Column(Text)
    authors = Column(JSON, default=list)
    publication_date = Column(DateTime(timezone=True))
    journal = Column(String(200))
    doi = Column(String(100))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    links = Column(JSON, default=list)
    images = Column(JSON, default=list)
    tags = Column(JSON, default=list)
    status = Column(String(50))
    # Additional Publication attributes
    citation_count = Column(Integer, default=0)
    impact_factor = Column(Float)
    publisher = Column(String(200))
    issue = Column(String(50))
    pages = Column(String(50))
    pdf_url = Column(String(255))
    conference_name = Column(String(200))
    publication_type = Column(String(100))  # journal, conference, book chapter, etc.
    keywords = Column(JSON, default=list)
    funding_source = Column(String(255))
