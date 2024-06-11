import datetime
from typing import List, Optional, Union
from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from pydantic import BaseModel
from src.deps.auth import auth, firebase, db
from src.deps.models import Contest, ContestUpdateSchema, FeedbackSchema, Participant, SubmissionSchema, UserModel
from fastapi.responses import JSONResponse
from fastapi.requests import Request
from fastapi import Security
from src.middlewares.authentication import oauth2_authentication
import uuid
from firebase_admin import storage
from src.services.SummaryAgent import get_formatted_response
from src.services.PreviewAgent import get_ai_preview
import random

class PrivateContestCreateSchema(BaseModel):
    title: str
    subTitle: str
    description: str
    type: str
    startDate: str
    endDate: str
    prizeDetails: str
    maxParticipants: int
    rules: str
    requirements: str
    criteria: str
    whatToBuild: str
    agreement: bool
    company: Optional[str] = None
    image_url: Optional[str] = None
    image_file: Optional[UploadFile] = None

class PrivateContestAccessSchema(BaseModel):
    key: str

router = APIRouter(prefix="/private-contest", tags=["private-contests"])
@router.post("/create", response_model=Contest)
async def create_private_contest(
    title: str = Form(...),
    subTitle: str = Form(...),
    description: str = Form(...),
    type: str = Form(...),
    startDate: str = Form(...),
    endDate: str = Form(...),
    prizeDetails: str = Form(...),
    maxParticipants: int = Form(...),
    rules: str = Form(...),
    requirements: str = Form(...),
    criteria: str = Form(...),
    whatToBuild: str = Form(...),
    agreement: bool = Form(...),
    company: Optional[str] = Form(None),
    image_url: Optional[str] = Form(None),
    image_file: Optional[UploadFile] = File(None),
    current_user: dict = Depends(oauth2_authentication)
):
    host_uid = current_user['uid']
    user_ref = db.collection('users').document(host_uid)
    user_doc = user_ref.get()

    if not user_doc.exists or user_doc.to_dict().get('role') != 'Host':
        raise HTTPException(status_code=403, detail="Only hosts can create contests")

    unique_id = str(uuid.uuid4())
    access_key = str(random.randint(1000, 9999))  # Generate a 4-digit key
    contest_data = {
        "title": title,
        "subTitle": subTitle,
        "description": description,
        "type": type,
        "startDate": startDate,
        "endDate": endDate,
        "prizeDetails": prizeDetails,
        "maxParticipants": maxParticipants,
        "rules": rules,
        "requirements": requirements,
        "criteria": criteria,
        "whatToBuild": whatToBuild,
        "agreement": agreement,
        "company": company,
        "host_uid": host_uid,
        "participants": [],
        "is_private": True,  # Flag to indicate the contest is private
        "access_key": access_key  # Store the generated access key
    }

    # Handle image URL or file upload
    if image_url:
        contest_data['image_url'] = image_url
    elif image_file:
        bucket = storage.bucket(name='fastapiauth-d3407.appspot.com')
        blob = bucket.blob(f'private_contests/{unique_id}/{image_file.filename}')
        blob.upload_from_string(image_file.file.read(), content_type=image_file.content_type)
        blob.make_public()
        contest_data['image_url'] = blob.public_url
    else:
        raise HTTPException(status_code=400, detail="Image URL or file is required")

    # Set the contest in a separate collection for private contests with a unique ID
    db.collection('private_contests').document(unique_id).set(contest_data)

    # Update the user's document to include this private contest ID
    existing_private_contests = user_doc.to_dict().get('private_contests', [])
    existing_private_contests.append(unique_id)
    user_ref.update({'private_contests': existing_private_contests})

    # Return the contest data, including the generated ID and access key
    return {**contest_data, "id": unique_id}

@router.post('/access', response_model=Contest)
async def access_private_contest(
    contest_id: str = Form(...),
    key: str = Form(...),
):
    contest_ref = db.collection('private_contests').document(contest_id)
    contest = contest_ref.get()
    
    if not contest.exists:
        raise HTTPException(status_code=404, detail="Private contest not found")
    
    contest_data = contest.to_dict()

    if contest_data['access_key'] != key:
        raise HTTPException(status_code=403, detail="Invalid access key")
    
    contest_data['id'] = contest.id  # Include the contest ID
    
    return Contest(**contest_data)
