from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException,status
from src.deps.models import Contest, LoginSchema, ProjectSchema,SignUpSchema, UserModel, UserProfileUpdateSchema
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from fastapi.requests import Request
from src.deps.auth import   auth , firebase ,db
import logging

from fastapi import Security
from src.middlewares.authentication import oauth2_authentication
router = APIRouter(prefix="/users", tags=["users"])
from fastapi import Cookie, HTTPException, status, Response
from fastapi.responses import JSONResponse
logging.basicConfig(level=logging.DEBUG)




@router.get('/user/{uid}')
async def read_user(uid: str, current_user: dict = Depends(oauth2_authentication)):
    try:
        user_record = db.collection('users').document(uid).get().to_dict()
        # Adjust the UserModel fields based on what you want to return
        return user_record
    except auth.UserNotFoundError:
        raise HTTPException(status_code=404, detail="User not found")


@router.patch("/user/update")
async def update_user_profile(uid: str, update_data: UserProfileUpdateSchema , current_user: dict = Depends(oauth2_authentication)):
    """
    Updates a user's profile information based on the provided UID and update data.
    Allows updating fields like name, skills, and description.
    If the specified user does not exist, it returns a user not found error.
    Upon successful update, it returns a success message.
    """
    user_ref = db.collection('users').document(uid)
    user_profile = user_ref.get()
    if not user_profile.exists:
        raise HTTPException(status_code=404, detail="User not found")
    
    user_ref.update(update_data.model_dump(exclude_unset=True))
    return {"message": "User profile updated successfully"}


@router.post('/user/{uid}/add-project')
async def add_project_to_user(uid: str, project_data: ProjectSchema , current_user: dict = Depends(oauth2_authentication)):
    user_ref = db.collection('users').document(uid)
    user_doc = user_ref.get()

    if not user_doc.exists:
        raise HTTPException(status_code=404, detail="User not found")

    # Assuming user's projects are stored in an array field in their document
    # If the user does not have a 'projects' field, it initializes as an empty list
    projects = user_doc.to_dict().get('projects', [])
    new_project = project_data.model_dump()
    projects.append(new_project)
    user_ref.update({"projects": projects})

 
    return {"message": "Project added successfully"}


