from fastapi import Request, HTTPException
from fastapi.responses import JSONResponse
from firebase_admin import auth

def get_current_user(request: Request):
    jwt_token = request.cookies.get('token')
    print(jwt_token if jwt_token is not None else "None")
    if not jwt_token:
        raise HTTPException(status_code=401, detail="Not authenticated")
    try:
        decoded_token = auth.verify_id_token(jwt_token)
        return decoded_token
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid token")

async def jwt_auth_middleware(request: Request, call_next):
    # Paths that do not require authentication
    bypass_paths = ["/api/users/login", "/api/users/signup" , "/docs" , "/openapi.json" , "/api/users/user/validate_session"]
    # print(jwt_token)

    # Check if the request path is in the bypass list
    print(f"Request path: {request.url.path}")  # Debugging output
    if request.url.path not in bypass_paths:
        jwt_token = request.cookies.get('token')
        print("JWT Token: " + (jwt_token if jwt_token is not None else "None"))
        if not jwt_token:
            return JSONResponse(status_code=401, content={"detail": "Not authenticated"})

        try:
            decoded_token = auth.verify_id_token(jwt_token)
            request.state.user = decoded_token
        except Exception as e:
            print(f"Token verification error: {e}")  # Debugging output
            return JSONResponse(status_code=401, content={"detail": "Invalid token"})

    # Proceed with the request
    return await call_next(request)