from fastapi import Depends, HTTPException, status, Response
from sqlalchemy.orm import Session
from typing import List
import uuid
import traceback
from passlib.context import CryptContext
from sqlalchemy.orm import with_polymorphic, selectin_polymorphic
from database.connect import get_db
from api.routes.student import student_router
from api.models.studentsModel import StudentCreate, StudentResponse, StudentUpdate
from database.schemas.UserSchema import Student, User
from api.routes.student.auth import get_current_student

# Password hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@student_router.post("/", response_model=StudentResponse, status_code=status.HTTP_201_CREATED)
def create_student(student: StudentCreate, db: Session = Depends(get_db)):
    """
    Create a new student
    
    Example of valid request body:
    ```
    {
      "user_name": "johndoe",
      "email": "john@example.com",
      "password": "securepassword",
      "first_name": "John",
      "last_name": "Doe",
      "phone": "1234567890",
      "bio": "Student bio",
      "register_number": "12345",
      "department": "CSE",
      "year_of_study": 2,
      "section": "A",
      "skills": ["Python", "FastAPI"],
      "interests": ["AI", "Machine Learning"],
      "profile_image": "image_url"
    }
    ```
    """
    try:
        # Check if email already exists
        existing_email = db.query(Student).filter(Student.email == student.email).first()
        if existing_email:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered"
            )
        
        # Create new student with hashed password
        db_student = Student(
            user_id=uuid.uuid4(),
            user_name=student.user_name,
            email=student.email,
            password=pwd_context.hash(student.password),  # Hash the password
            first_name=student.first_name,
            last_name=student.last_name,
            phone=student.phone,
            profile_image=student.profile_image,
            bio=student.bio,
            user_type="student",
            register_number=student.register_number,
            department=student.department,
            year_of_study=student.year_of_study,
            skills=student.skills,
            interests=student.interests,
        )
        
        db.add(db_student)
        db.commit()
        db.refresh(db_student)
        return db_student
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Error creating student: {str(e)}"
        )

@student_router.get("/me", response_model=StudentResponse)
def get_current_student_profile(current_user: User = Depends(get_current_student)):
    """Get current student profile"""
    return current_user

@student_router.get("/{email}", response_model=StudentResponse)
def get_student(
    email: str, 
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_student)
):
    """Get student by ID"""
    student = db.query(Student).filter(Student.email == email).first()
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student not found"
        )
    return student

@student_router.get("/", response_model=List[StudentResponse])
def get_students(
    skip: int = 0, 
    limit: int = 100, 
    db: Session = Depends(get_db),
    current_user: Student = Depends(get_current_student)
):
    """Get all students with pagination"""
    try:
        # Query Student directly to ensure we fetch the full Student subclass
        students = db.query(Student).offset(skip).limit(limit).all()

        if not students:
            return []

        # Using Pydantic's from_orm() method
        return [StudentResponse.from_orm(student) for student in students]

    except Exception as e:
        print(f"Error in get_students: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error retrieving students: {str(e)}"
        )
@student_router.put("/", response_model=StudentResponse)
def update_student(
    student_update: StudentUpdate, 
    db: Session = Depends(get_db),
    current_user: Student = Depends(get_current_student)
):
    """Update student information"""
    # Check if the user is trying to update their own profile
    email = current_user.email
        
    db_student = db.query(Student).filter(Student.email == email).first()
    if not db_student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student not found"
        )
    
    update_data = student_update.model_dump(exclude_unset=True)
    
    # Check for register_number uniqueness if it's being updated
    if "register_number" in update_data:
        existing = db.query(Student).filter(
            Student.register_number == update_data["register_number"],
            Student.email != email  # Exclude the current student
        ).first()
        if existing:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Register number already exists"
            )
    
    for key, value in update_data.items():
        # Hash the password if it's being updated
        if key == "password":
            value = pwd_context.hash(value)
        setattr(db_student, key, value)
    
    try:
        db.commit()
        db.refresh(db_student)
        return db_student
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Error updating student: {str(e)}"
        )

@student_router.delete("/", status_code=status.HTTP_204_NO_CONTENT)
def delete_student(
    
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_student)
):
    """Delete a student"""
    email = current_user.email
    db_student = db.query(Student).filter(Student.email == email).first()
    if not db_student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student not found"
        )
    
    db.delete(db_student)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
