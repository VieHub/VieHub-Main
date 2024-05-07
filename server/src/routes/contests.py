import datetime
from typing import Annotated, List
from fastapi import APIRouter, Depends, HTTPException
from src.deps.models import Contest, ContestUpdateSchema, FeedbackSchema, LoginSchema, Participant,SignUpSchema, SubmissionSchema, UserModel, UserProfileUpdateSchema
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from fastapi.requests import Request
from src.deps.auth import   auth , firebase ,db
import uuid

from fastapi import Security
router = APIRouter(prefix="/contest", tags=["contests"])
@router.post("/contest/create", response_model=Contest)
async def create_contest(uid: str, contest: Contest, request: Request):
    user_ref = db.collection('users').document(uid)
    user_doc = user_ref.get()

    if not user_doc.exists or user_doc.to_dict().get('role') != 'Host':
        raise HTTPException(status_code=403, detail="Only hosts can create contests")

    unique_id = str(uuid.uuid4())
    contest_data = contest.model_dump()
    contest_data['host_uid'] = uid  # Set the host UID based on the authenticated user

    # Set the contest in the contests collection with a unique ID
    db.collection('contests').document(unique_id).set(contest_data)

    # Update the user's document to include this contest ID
    # Fetch existing contest IDs, append the new one, and update the document
    existing_contests = user_doc.to_dict().get('contests', [])
    existing_contests.append(unique_id)
    user_ref.update({'contests': existing_contests})

    # Return the contest data, including the generated ID
    return {**contest_data, "id": unique_id}

@router.get('/contests', response_model=List[Contest])
async def get_contests():
    contests = []
    for contest in db.collection('contests').stream():
        contests.append(Contest(**contest.to_dict()))
    return contests

@router.get('/contests/{uid}' ,response_model=List[Contest])
async def get_contests_by_id( uid: str):
    contests_query = db.collection('contests').where('host_uid', '==', uid).stream()

    contests = []
    for contest in contests_query:
        contest_dict = contest.to_dict()
        contest_data = Contest(
            id=contest.id,
            name=contest_dict['name'],
            description=contest_dict['description'],
            skill_level=contest_dict['skill_level'],
            location=contest_dict['location'],
            start_date=(contest_dict['start_date']),
            end_date=(contest_dict['end_date']),
            host_uid=contest_dict['host_uid']
        )
        contests.append(contest_data)

    if not contests:
        raise HTTPException(status_code=404, detail="No contests found for this user")

    return contests

@router.patch("/contest/{contest_id}/update")
async def update_contest(contest_id: str, contest_update: ContestUpdateSchema, request: Request):
    """
    Updates an existing contest's details. Only the host who created the contest can update it.
    Contest ID is passed as a path parameter, and updated fields are provided in the request body as a ContestUpdateSchema model.
    Returns a success message upon updating the contest details.
    """
    jwt = request.headers.get('authorization')
    decoded_token = auth.verify_id_token(jwt)
    uid = decoded_token['uid']

    contest_ref = db.collection('contests').document(contest_id)
    contest = contest_ref.get()
    if not contest.exists:
        raise HTTPException(status_code=404, detail="Contest not found")
    if contest.to_dict()['host_uid'] != uid:
        raise HTTPException(status_code=403, detail="Only the host can update the contest")
    
    contest_ref.update(contest_update.model_dump(exclude_unset=True))
    return {"message": "Contest updated successfully"}
@router.post("/contest/{contest_id}/enroll")
async def enroll_in_contest(participant_uid:str,contest_id: str):
 
    # Fetch participant details from the users collection
    user_ref = db.collection('users').document(participant_uid)
    user_doc = user_ref.get()
    if not user_doc.exists:
        raise HTTPException(status_code=404, detail="User not found")

    user_data = user_doc.to_dict()
    if user_data.get('role') != 'Participant':
        raise HTTPException(status_code=403, detail="Only participants can enroll in contests")

    # Create a Participant object
    participant = Participant(
        user_id=participant_uid,
       
    )

    # Add participant to the contest
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
async def submit_to_contest(contest_id: str, submission: SubmissionSchema, request: Request):
    """
    Allows participants to submit their work for a contest they are enrolled in.
    The contest ID is passed as a path parameter, and submission details are provided in the request body as a SubmissionSchema model.
    Returns a success message upon successful submission.
    """
    jwt = request.headers.get('authorization')
    decoded_token = auth.verify_id_token(jwt)
    participant_uid = decoded_token['uid']

    # Logic to submit to the contest
    submission_data = submission.model_dump()
    submission_data['participant_uid'] = participant_uid
    db.collection('submissions').add(submission_data)
    
    return {"message": "Submission successful"}


@router.post("/feedback/{contest_id}")
async def submit_feedback(contest_id: str, feedback: FeedbackSchema, request: Request):
    """
    Allows users to submit feedback for a specific contest.
    The contest ID is passed as a path parameter, and feedback details are provided in the request body as a FeedbackSchema model.
    Returns a success message upon successful feedback submission.
    """
    # FeedbackSchema includes fields like uid, rating, comments
    db.collection('feedback').add(feedback.model_dump())
    return {"message": "Feedback submitted successfully"}
