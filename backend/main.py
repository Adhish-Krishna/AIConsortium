from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

from database.connect import Base, engine, get_db , check_database_connection
from api.routes import api_router


app = FastAPI(
    title="AI Consortium API",
    description="API for AI Consortium platform",
    version="1.0.0"
    )
    

# Configure CORS
app.include_router(api_router , prefix='/api')
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers

check_database_connection()

@app.on_event("startup")
async def startup():
    # Create tables if they don't exist
    Base.metadata.create_all(bind=engine)

@app.get("/")
def read_root():
    return {"message": "Welcome to AI Consortium API"}

# Example endpoint with database access
@app.get("/db-test")
def test_db_connection(db: Session = Depends(get_db)):
    try:
        # Execute a simple query
        db.execute(text("SELECT 1"))
        return {"message": "Database connection successful"}
    except Exception as e:
        return {"message": f"Database connection failed: {str(e)}"}

from sqlalchemy.orm import Session
from database.connect import engine, Base, SessionLocal

# Import the model
# from database.models import Project  # Assuming the file is named models.py

# # Function to insert sample projects
# def seed_projects():
#     # Create tables if they don't exist
#     Base.metadata.create_all(bind=engine)
    
#     # Sample project data
#     sample_projects = [
#         {
#             "title": "AI Ethics Framework",
#             "description": "Developing ethical guidelines for AI implementation across industries."
#         },
#         {
#             "title": "Machine Learning Workshop Series",
#             "description": "Monthly workshops covering fundamental to advanced ML concepts."
#         },
#         {
#             "title": "Computer Vision Research",
#             "description": "Collaborative research on advanced computer vision applications."
#         },
#         {
#             "title": "NLP Standards Development",
#             "description": "Creating standardized evaluation metrics for natural language processing systems."
#         }
#     ]
    
#     # Create session and add projects
#     db = SessionLocal()
#     try:
#         for project_data in sample_projects:
#             project = Project(**project_data)
#             db.add(project)
#         db.commit()
#         print(f"Added {len(sample_projects)} sample projects to the database.")
#     except Exception as e:
#         db.rollback()
#         print(f"Error seeding projects: {e}")
#     finally:
#         db.close()

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)