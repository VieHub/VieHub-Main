from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException
from src.deps.models import Contest, LoginSchema, ProjectSchema,SignUpSchema, UserModel, UserProfileUpdateSchema
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from fastapi.requests import Request
from src.deps.auth import   auth , firebase ,db

from fastapi import Security
router = APIRouter(prefix="/users", tags=["users"])



@router.post('/signup')
async def create_an_account(user_data: SignUpSchema):
    email = user_data.email
    password = user_data.password
    role = user_data.role  # Capture the role from the signup request

    try:
        # Create the user in Firebase Authentication
        user_record = auth.create_user(
            email=email,
            password=password
        )
        # Save the role and any additional user information in your database
        db.collection('users').document(user_record.uid).set({
            "email": email,
            "role": role  # Store the user role
        })
        return JSONResponse(
            content={"message": f"User account created successfully for user {user_record.uid}, with role {role}"},
            status_code=201
        )
    except auth.EmailAlreadyExistsError:
        raise HTTPException(
            status_code=400,
            detail=f"Account already created for this e-mail {email}"
        )


@router.post('/login')
async def create_an_access_token(user_data: LoginSchema):
   """
    Authenticates a user with their email and password.
    On successful authentication, it returns a JSON Web Token (JWT) and the user's UID for further authorization purposes.
    If authentication fails, it returns an error indicating invalid user credentials.
   """

   email = user_data.email
   password = user_data.password
   try:
      user = firebase.auth().sign_in_with_email_and_password(email=email, password=password)
      # Decode the token to get UID (Not necessary if using Firebase SDK as shown, but included for clarity)
      decoded_token = auth.verify_id_token(user["idToken"])
      uid = decoded_token["uid"]
      return JSONResponse(
        content={
                "token": user["idToken"],
                "uid": uid  # Include UID in the response
            }, status_code=200
      )
   except:
      raise HTTPException(
            status_code=400, detail="Invalid User"
        )



@router.get('/user/{uid}', response_model=UserModel)
async def read_user(uid: str):
    try:
        user_record = auth.get_user(uid)
        # Adjust the UserModel fields based on what you want to return
        return UserModel(email=user_record.email, uid=user_record.uid)
    except auth.UserNotFoundError:
        raise HTTPException(status_code=404, detail="User not found")


@router.post('/logout')
async def logout(request: Request):
   """
    Logs out a user by revoking their Firebase refresh token.
    It requires the JWT to be passed in the request headers for authorization.
    On success, it returns a message indicating the user has been logged out successfully.
    If an error occurs during the process, it returns an error message.
    """
   jwt = request.headers.get('authorization')
   decoded_token = auth.verify_id_token(jwt)
   uid = decoded_token['uid']
   try:
      auth.revoke_refresh_tokens(uid)
      return {"message": "User logged out successfully"}
   except Exception as e:
      raise HTTPException(status_code=400, detail="Error logging out")


@router.patch("/user/update")
async def update_user_profile(uid: str, update_data: UserProfileUpdateSchema):
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


@router.post('/user/{uid}/add-project', response_model=ProjectSchema)
async def add_project_to_user(uid: str, project_data: ProjectSchema):
    user_ref = db.collection('users').document(uid)
    user_doc = user_ref.get()

    if not user_doc.exists:
        raise HTTPException(status_code=404, detail="User not found")

    # Assuming user's projects are stored in an array field in their document
    # If the user does not have a 'projects' field, it initializes as an empty list
    projects = user_doc.to_dict().get('projects', [])
    projects.append(project_data.model_dump())

    user_ref.update({"projects": projects})

    return {"message": "Project added successfully"}


@router.post('/ping')
async def validate_token(request:Request):
    """
    Validates a Firebase JWT passed in the request headers.
    It is used to verify that a token is valid and returns the UID of the user associated with the token.
    This route can be used to check the validity of a token without performing any user data changes or retrievals.
    """
    headers = request.headers
    jwt = headers.get('authorization')
    user = auth.verify_id_token(jwt)
    return user["user_id"]
   


