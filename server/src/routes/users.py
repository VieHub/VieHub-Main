from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException
from src.deps.models import LoginSchema,SignUpSchema
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from fastapi.requests import Request
from src.deps.auth import   auth , firebase 
router = APIRouter(prefix="/users", tags=["users"])


# @router.get(path="", description="retrieve all users data in the server")
# async def read_users() -> str:
#     # Perform logic to retrieve user data here
#     # For testing purposes, return a simple string response
#     return "test"


@router.post('/signup')
async def create_an_account(user_data:SignUpSchema):
   email= user_data.email
   password =user_data.password
  
   try:
      user = auth.create_user(
         email = email,
         password= password
        )
      return JSONResponse(content={"message": f"User account created successfuly for user {user.uid}"},
                           status_code = 201
              )
                               
                                
   except auth.EmailAlreadyExistsError:
      raise HTTPException(
         status_code=400,
         detail= f"Account already created for this e-mail{email}"    

        )

@router.post('/login')
async def create_an_access_token(user_data:LoginSchema):
    email= user_data.email
    password =user_data.password
    try:
       user = firebase.auth().sign_in_with_email_and_password(
           email = email,
           password= password
       )
       token = user["idToken"]
       return JSONResponse(
          content={
             "token": token
          },status_code=200
           )
 
    except:
       raise HTTPException(
           status_code=400,detail="Invalid User"
       )
@router.post('/ping')
async def validate_token(request:Request):
    headers = request.headers
    jwt = headers.get('authorization')
    user = auth.verify_id_token(jwt)
    return user["user_id"]
   