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

class ContestCreateSchema(BaseModel):
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


router = APIRouter(prefix="/contest", tags=["contests"])

@router.post("/contest/create", response_model=Contest)
async def create_contest(
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
        "participants": []
    }

    # Handle image URL or file upload
    if image_url:
        contest_data['image_url'] = image_url
    elif image_file:
        bucket = storage.bucket(name='fastapiauth-d3407.appspot.com')
        blob = bucket.blob(f'contests/{unique_id}/{image_file.filename}')
        blob.upload_from_string(image_file.file.read(), content_type=image_file.content_type)
        blob.make_public()
        contest_data['image_url'] = blob.public_url
    else:
        raise HTTPException(status_code=400, detail="Image URL or file is required")

    # Set the contest in the contests collection with a unique ID
    db.collection('contests').document(unique_id).set(contest_data)

    # Update the user's document to include this contest ID
    existing_contests = user_doc.to_dict().get('contests', [])
    existing_contests.append(unique_id)
    user_ref.update({'contests': existing_contests})

    # Return the contest data, including the generated ID
    return Contest(**contest_data, id=unique_id)


@router.post("/contest/preview", response_model=Contest)
async def preview_contest(
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
    image_url: UploadFile = File(...),
    current_user: dict = Depends(oauth2_authentication)
):
    host_uid = current_user['uid']
    user_ref = db.collection('users').document(host_uid)
    user_doc = user_ref.get()

    if not user_doc.exists or user_doc.to_dict().get('role') != 'Host':
        raise HTTPException(status_code=403, detail="Only hosts can create contests")

    unique_id = str(uuid.uuid4())
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
        "participants": []
    }

    # Upload the image to Firebase Storage
    bucket = storage.bucket(name='fastapiauth-d3407.appspot.com')
    blob = bucket.blob(f'contests/{unique_id}/{image_url.filename}')
    blob.upload_from_string(image_url.file.read(), content_type=image_url.content_type)
    blob.make_public()
    contest_data['image_url'] = blob.public_url

    # Call the create_contest_ai method with the contest data
    ai_response = get_ai_preview(contest_data)

    # Return the AI response instead of storing the contest data
    return ai_response

@router.post("/contest/generateai"  ,tags=["contests"])
async def create_contest_ai(type: str, details: str) :
    
    response = get_formatted_response(type=type,details=details)
    print(response)
    return {"message": response}




@router.get('/contests', response_model=List[Contest])
async def get_contests():
    contests = []
    for contest in db.collection('contests').stream():
        contest_data = contest.to_dict()
        contest_data['id'] = contest.id  # Include the contest ID
        contests.append(Contest(**contest_data))
    return contests

@router.get('/contests/by_user/{uid}', response_model=List[Contest])
async def get_contests_by_user_id(uid: str):
    contests_query = db.collection('contests').where('host_uid', '==', uid).stream()
    contests = []
    for contest in contests_query:
        contest_data = contest.to_dict()
        contest_data['id'] = contest.id  # Include the contest ID
        contests.append(Contest(**contest_data))

    if not contests:
        raise HTTPException(status_code=404, detail="No contests found for this user")

    return contests

@router.get('/contests/{contest_id}', response_model=Contest)
async def get_contest_by_id(contest_id: str):
    contest_ref = db.collection('contests').document(contest_id)
    contest = contest_ref.get()
    
    if not contest.exists:
        raise HTTPException(status_code=404, detail="Contest not found")
    
    contest_data = contest.to_dict()
    contest_data['id'] = contest.id  # Include the contest ID
    
    return Contest(**contest_data)

@router.patch("/contest/{contest_id}/update")
async def update_contest(
    contest_id: str, 
    contest_update: ContestUpdateSchema, 
    request: Request, 
    current_user: dict = Depends(oauth2_authentication)
):
    uid = current_user['uid']
    contest_ref = db.collection('contests').document(contest_id)
    contest = contest_ref.get()
    
    if not contest.exists:
        raise HTTPException(status_code=404, detail="Contest not found")
    if contest.to_dict()['host_uid'] != uid:
        raise HTTPException(status_code=403, detail="Only the host can update the contest")
    
    contest_ref.update(contest_update.dict(exclude_unset=True))
    return {"message": "Contest updated successfully"}

@router.post("/contest/{contest_id}/enroll")
async def enroll_in_contest(
    participant_uid: str, 
    contest_id: str, 
    current_user: dict = Depends(oauth2_authentication)
):
    user_ref = db.collection('users').document(participant_uid)
    user_doc = user_ref.get()

    if not user_doc.exists:
        raise HTTPException(status_code=404, detail="User not found")
    if user_doc.to_dict().get('role') != 'Participant':
        raise HTTPException(status_code=403, detail="Only participants can enroll in contests")

    participant = Participant(user_id=participant_uid)
    contest_ref = db.collection('contests').document(contest_id)
    contest_doc = contest_ref.get()

    if not contest_doc.exists:
        raise HTTPException(status_code=404, detail="Contest not found")

    contest_data = contest_doc.to_dict()
    participants = contest_data.get('participants', [])
    participants.append(participant.dict())
    contest_ref.update({"participants": participants})

    return {"message": "Enrollment successful"}

@router.post("/contest/{contest_id}/submit")
async def submit_to_contest(
    contest_id: str, 
    submission: SubmissionSchema, 
    request: Request, 
    current_user: dict = Depends(oauth2_authentication)
):
    participant_uid = current_user['uid']
    submission_data = submission.dict()
    submission_data['participant_uid'] = participant_uid
    db.collection('submissions').add(submission_data)
    
    return {"message": "Submission successful"}

@router.post("/feedback/{contest_id}")
async def submit_feedback(
    contest_id: str, 
    feedback: FeedbackSchema, 
    request: Request, 
    current_user: dict = Depends(oauth2_authentication)
):
    db.collection('feedback').add(feedback.dict())
    return {"message": "Feedback submitted successfully"}
