from fastapi import Depends, HTTPException, status
from api.routes.user.auth import get_current_user

async def get_current_student(current_user = Depends(get_current_user)):
    if current_user.user_type != "student":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, 
            detail="Not authorized: User is not a student"
        )
    return current_user
