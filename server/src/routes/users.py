from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException,status
from src.deps.models import Contest, LoginSchema, ProjectSchema,SignUpSchema, UserModel, UserProfileUpdateSchema
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from fastapi.requests import Request
from src.deps.auth import   auth , firebase ,db

from fastapi import Security
router = APIRouter(prefix="/users", tags=["users"])
from fastapi import Cookie, HTTPException, status, Response
from fastapi.responses import JSONResponse

@router.post('/signup')
async def create_an_account(user_data: SignUpSchema, response: Response):
    try:
        user_record = auth.create_user(
            email=user_data.email,
            password=user_data.password
        )
        user_creds = firebase.auth().sign_in_with_email_and_password(user_data.email, user_data.password)

        db.collection('users').document(user_record.uid).set({
            "email": user_data.email,
            "role": user_data.role,
            "first_name": user_data.first_name,
            "last_name": user_data.last_name,
            "company_name": user_data.company_name,
            "company_phone": user_data.company_phone,
            "company_address": user_data.company_address,
            "industry": user_data.industry
        })

        # Set HTTP-only cookie with the token
        response.set_cookie(
            key="token",
            value=user_creds['idToken'],
            httponly=True,
            secure=False,  # Use secure=True in production
            samesite='Lax'
        )

        return JSONResponse(
            content={
                "message": f"Account created successfully for {user_data.first_name} {user_data.last_name} as a {user_data.role}",
                "uid": user_record.uid
            },
            status_code=status.HTTP_201_CREATED
        )
    except auth.EmailAlreadyExistsError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Account already created for this e-mail {user_data.email}"
        )
@router.post('/login')
async def login(user_data: LoginSchema, response: Response):
    try:
        user = firebase.auth().sign_in_with_email_and_password(email=user_data.email, password=user_data.password)

        # Set HTTP-only cookie with the token
        response.set_cookie(
            key="token",
            value=user["idToken"],
            httponly=True,
            secure=False,  # Use secure=True in production
            samesite='Lax'  # Helps mitigate CSRF
        )

        return JSONResponse(
            content={
                "uid": user["localId"]  # Include UID in the response
            }, 
            status_code=200
        )
    except Exception as e:
        raise HTTPException(
            status_code=400, 
            detail="Invalid User Credentials"
        )



@router.get('/user/{uid}', response_model=UserModel)
async def read_user(uid: str):
    try:
        user_record = auth.get_user(uid)
        # Adjust the UserModel fields based on what you want to return
        return UserModel(email=user_record.email, uid=user_record.uid)
    except auth.UserNotFoundError:
        raise HTTPException(status_code=404, detail="User not found")

@router.get('/validate_session')
async def validate_session(request: Request):
    # Check if user data is available in the request state set by the middleware
    user_data = getattr(request.state, 'user', None)
    
    if user_data:
        return JSONResponse(
            content={
                "isAuthenticated": True,
                "user": {
                    "uid": user_data['uid'],  # Assuming 'uid' is stored in the token
                    "email": user_data.get('email', 'No email provided')
                }
            },
            status_code=200
        )
    else:
        return JSONResponse(
            content={"isAuthenticated": False},
            status_code=401
        )


# @router.post('/logout')
# async def logout(request: Request):
#    """
#     Logs out a user by revoking their Firebase refresh token.
#     It requires the JWT to be passed in the request headers for authorization.
#     On success, it returns a message indicating the user has been logged out successfully.
#     If an error occurs during the process, it returns an error message.
#     """
#    jwt = request.headers.get('authorization')
#    decoded_token = auth.verify_id_token(jwt)
#    uid = decoded_token['uid']
#    try:
#       auth.revoke_refresh_tokens(uid)
#       return {"message": "User logged out successfully"}
#    except Exception as e:
#       raise HTTPException(status_code=400, detail="Error logging out")
@router.post('/logout')
async def logout(response: Response):
    response.delete_cookie("token")
    return {"message": "Logged out successfully"}


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


