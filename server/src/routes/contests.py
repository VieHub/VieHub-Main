import datetime
from typing import Annotated
from fastapi import APIRouter, Depends, HTTPException
from src.deps.models import Contest, ContestUpdateSchema, FeedbackSchema, LoginSchema,SignUpSchema, SubmissionSchema, UserModel, UserProfileUpdateSchema
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from fastapi.requests import Request
from src.deps.auth import   auth , firebase ,db
import uuid

from fastapi import Security
router = APIRouter(prefix="/contest", tags=["contests"])
@router.post("/contest/create", response_model=Contest)
async def create_contest(contest: Contest, request: Request):
    """
    Creates a new contest with a unique, randomly generated contest ID.
    Only users with the role of 'host' can create contests. The contest details are passed
    in the request body as a Contest model. On successful creation, the route returns
    the newly created Contest model, including its unique ID.
    """
    jwt = request.headers.get('authorization')
    decoded_token = auth.verify_id_token(jwt)
    uid = decoded_token['uid']

    # Check if the user is a host
    user_profile = db.collection('users').document(uid).get()
    if user_profile.to_dict()['role'] != 'host':
        raise HTTPException(status_code=403, detail="Only hosts can create contests")

    unique_id = str(uuid.uuid4())
    contest_data = contest.model_dump()
    contest_data['host_uid'] = uid  # Set the host UID based on the authenticated user

    # Use the unique_id as the document ID in your database
    db.collection('contests').document(unique_id).set(contest_data)

    # Return the contest data, including the generated ID
    return {**contest_data, "id": unique_id}



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
async def enroll_in_contest(contest_id: str, request: Request):
    """
    Allows a participant to enroll in an existing contest.
    The contest ID to enroll in is passed as a path parameter.
    Enrollment is subject to validation, such as checking if the contest exists and is open for enrollment.
    Returns a success message upon successful enrollment.
    """
    jwt = request.headers.get('authorization')
    decoded_token = auth.verify_id_token(jwt)
    participant_uid = decoded_token['uid']

    # Example logic to add participant to the contest
    contest_ref = db.collection('contests').document(contest_id)
    contest = contest_ref.get()
    if not contest.exists or datetime.now() > contest.to_dict()['start_date']:
        raise HTTPException(status_code=400, detail="Cannot enroll in this contest")
    
    # Update contest participants (pseudo-code)
    # contest_ref.update({"participants": firestore.ArrayUnion([participant_uid])})
    return {"message": "Enrolled in contest successfully"}


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
