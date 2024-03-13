from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException

router = APIRouter(prefix="/users", tags=["users"])


@router.get(path="", description="retrieve all users data in the server")
async def read_users() -> str:
    # Perform logic to retrieve user data here
    # For testing purposes, return a simple string response
    return "test"