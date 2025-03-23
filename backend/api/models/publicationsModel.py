from typing import Optional, List, Dict, Any
from pydantic import BaseModel
from datetime import datetime

class PublicationBase(BaseModel):
    title: str
    abstract: Optional[str] = None
    authors: Optional[List[Dict[str, Any]]] = []
    publication_date: Optional[datetime] = None
    journal: Optional[str] = None
    doi: Optional[str] = None
    links: Optional[List[str]] = []
    images: Optional[List[str]] = []
    tags: Optional[List[str]] = []
    status: Optional[str] = None
    citation_count: Optional[int] = 0
    impact_factor: Optional[float] = None
    publisher: Optional[str] = None
    issue: Optional[str] = None
    pages: Optional[str] = None
    pdf_url: Optional[str] = None
    conference_name: Optional[str] = None
    publication_type: Optional[str] = None
    keywords: Optional[List[str]] = []
    funding_source: Optional[str] = None

class PublicationCreate(PublicationBase):
    pass

class PublicationUpdate(BaseModel):
    title: Optional[str] = None
    abstract: Optional[str] = None
    authors: Optional[List[Dict[str, Any]]] = None
    publication_date: Optional[datetime] = None
    journal: Optional[str] = None
    doi: Optional[str] = None
    links: Optional[List[str]] = None
    images: Optional[List[str]] = None
    tags: Optional[List[str]] = None
    status: Optional[str] = None
    citation_count: Optional[int] = None
    impact_factor: Optional[float] = None
    publisher: Optional[str] = None
    issue: Optional[str] = None
    pages: Optional[str] = None
    pdf_url: Optional[str] = None
    conference_name: Optional[str] = None
    publication_type: Optional[str] = None
    keywords: Optional[List[str]] = None
    funding_source: Optional[str] = None

class PublicationResponse(PublicationBase):
    publication_id: str
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True
