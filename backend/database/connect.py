from sqlalchemy import create_engine, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

from configs import settings
DATABASE_URL = settings.DATABASE_URL



# Function to check database connection details
def check_database_connection()-> bool:
    with engine.connect() as connection:
        # Get server version
        version = connection.execute(text("SELECT version()")).scalar()
        # Get current database name
        db_name = connection.execute(text("SELECT current_database()")).scalar()
        # Get current schemas
        schemas = connection.execute(text("SELECT schema_name FROM information_schema.schemata")).scalars().all()
        # Get database size
        db_size = connection.execute(text("SELECT pg_size_pretty(pg_database_size(current_database()))")).scalar()
        # Get server name/address
        server_name = connection.execute(text("SELECT inet_server_addr()::text")).scalar()
        print(f"Connected  to: {server_name}")
        print(f"Connected to: {db_name}")
        print(f"PostgreSQL version: {version}")
        print(f"Database size: {db_size}")
        print(f"Available schemas: {', '.join(schemas)}")
        
    return True

# Create SQLAlchemy engine
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
