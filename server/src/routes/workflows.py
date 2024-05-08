
from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException

from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordRequestForm
from src.deps.auth import   auth , firebase ,db
from pydantic import BaseModel

router = APIRouter(prefix="/workflows", tags=["workflows"])



class SignInSchema(BaseModel):
    username: str
    password: str

@router.post(path="/signin_with_password")
async def local_signin(    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
):
    email = form_data.username
    password = form_data.password


    try:
        user = firebase.auth().sign_in_with_email_and_password(email=email, password=password)


        # Decode the token to get UID (Not necessary if using Firebase SDK as shown, but included for clarity)
        decoded_token = auth.verify_id_token(user["idToken"] , clock_skew_seconds=10)
        uid = decoded_token["uid"]

        return {"access_token": user["idToken"], "token_type": "bearer" , "uid": uid}

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
