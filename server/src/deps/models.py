from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional,Literal
from datetime import datetime



class SignUpSchema(BaseModel):
    email: EmailStr
    password: str
    role: Literal["Host", "Participant"]  # This enforces role to be either "host" or "participant"

    class Config:
        schema_extra = {
            "example": {
                "email": "sample@gmail.com",
                "password": "samplepass123",
                "role": "Participant"  # Example showing allowed value
            }
        }
      
class UserModel(BaseModel):
    email: str
    uid: str


class LoginSchema(BaseModel):
    email:str
    password:str
    class Config:
        json_schema_extra ={ 
            "example":{
               "email":"sample@gmail.com" ,
               "password": "samplepass123"
            }
        }

class Contest(BaseModel):
    name: str
    description: str
    start_date: datetime
    end_date: datetime
    skill_level: str
    location: str
    host_uid: Optional[str] = None  # Make host_uid optional as it will be filled in by the application logic

class Submission(BaseModel):
    contest_id: str
    participant_uid: str
    submission_link: str
    description: Optional[str] = None

class UserProfile(BaseModel):
    uid: str
    email: str
    name: Optional[str] = None
    skills: List[str] = []
    description: Optional[str] = None
    role: str  # "host" or "participant"

class UserProfileUpdateSchema(BaseModel):
    name: Optional[str] = None
    skills: Optional[List[str]] = None
    description: Optional[str] = None
    role: Optional[str] = Field(None, description="Can be 'host' or 'participant'")

class ContestUpdateSchema(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    skill_level: Optional[str] = None
    location: Optional[str] = None


class SubmissionSchema(BaseModel):
    contest_id: str
    participant_uid: str
    submission_link: str
    description: Optional[str] = None


class FeedbackSchema(BaseModel):
    contest_id: str
    uid: str  # The UID of the user submitting the feedback
    rating: int = Field(..., ge=1, le=5, description="Rating on a scale of 1 to 5")
    comments: Optional[str] = None
