from fastapi import FastAPI, Depends, HTTPException, status, Security
from fastapi.security import OAuth2PasswordBearer
from firebase_admin import auth as firebase_auth
import os
# OAuth2PasswordBearer is a class that FastAPI provides to handle OAuth2 Bearer tokens
from firebase_admin import auth as firebase_auth
# This will appear in the Swagger UI allowing users to authenticate via OAuth2
oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/api/workflows/signin_with_password",
    auto_error=False,
    description="OAuth2 Bearer token for authentication",
    

)
async def oauth2_authentication(token: str = Depends(oauth2_scheme)):
    # print(token)
    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
    try:

        # Decode the token using Firebase Admin SDK
        decoded_token = firebase_auth.verify_id_token(token)
        return decoded_token
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Could not validate token")
