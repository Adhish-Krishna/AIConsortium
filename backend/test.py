from database.connect import get_db, check_database_connection
from configs import settings
from database.schemas.UserSchema import Student

check_database_connection()
print(settings.PORT)

db = next(get_db())
student = db.query(Student).filter(Student.user_id == 'ad9ba389-46b2-482c-aa36-1ecc1dad20a7').first()
if student:
    # Print individual attributes
    print(f"Student ID: {student.student_id}")
    print(f"User ID: {student.user_id}")
    
    # Or convert to dictionary and print all attributes
    student_dict = {c.name: getattr(student, c.name) for c in student.__table__.columns}
    print(student_dict)
else:
    print("Student not found")
# To get all registrations for a specific event
# def get_event_registrations(db, event_id):
#     return db.query(EventRegistration).filter(EventRegistration.event_id == event_id).all()

# # To get all students registered for a specific event
# def get_event_attendees(db, event_id):
#     return db.query(Student).join(EventRegistration).filter(
#         EventRegistration.event_id == event_id
#     ).all()

# # To get registration details with student information
# def get_detailed_registrations(db, event_id):
#     return db.query(EventRegistration, Student).join(
#         Student, EventRegistration.student_id == Student.id
#     ).filter(
#         EventRegistration.event_id == event_id
#     ).all()
