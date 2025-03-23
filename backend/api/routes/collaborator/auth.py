from fastapi import Depends, HTTPException, status
from api.routes.user.auth import get_current_user
from database.schemas.UserSchema import User

async def get_current_collaborator(current_user = Depends(get_current_user)):
    if current_user.user_type != "collaborator":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, 
            detail="Not authorized: User is not a collaborator"
        )
    return current_user
