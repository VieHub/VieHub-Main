from pydantic import BaseModel, Field, EmailStr, HttpUrl, field_validator, validator
from typing import Annotated, List, Optional,Literal
from datetime import date, datetime
from pydantic import BaseModel, EmailStr
from typing import Literal
from fastapi import File, UploadFile

class SignUpSchema(BaseModel):
    email: EmailStr
    password: str
    role: Literal["Host", "Participant"]
    first_name: str
    last_name: str
    company_name: str
    company_phone: str
    company_address: str
    industry: str

    class Config:
        schema_extra = {
            "example": {
                "email": "sample@gmail.com",
                "password": "samplepass123",
                "role": "Host",
                "first_name": "John",
                "last_name": "Doe",
                "company_name": "Acme Inc.",
                "company_phone": "+1234567890",
                "company_address": "1234 Street, City",
                "industry": "Technology"
            }
        }

class UserModel(BaseModel):
    email: str
    uid: str
    firstName : str
    lastName : str
    phone : str
    role: str
    specialization: str
    email: str
    skills: str

class Participant(BaseModel):
    user_id: str



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
class CreateContestInput(BaseModel):
    title: Annotated[str, Field(..., example="Coding Challenge")] 
    description: Annotated[str, Field(..., example="A challenge for coding enthusiasts.")]
    type: Annotated[str, Field(..., example="Coding")]
    startDate: Annotated[str, Field(..., example="2024-05-12T16:03:52+0300")] 
    endDate: Annotated[str, Field(..., example="2024-05-12T16:03:52+0300")] 
    prizeDetails: Annotated[str, Field(..., example="200 USD")]
    maxParticipants: Annotated[int, Field(..., example=3)]
    rules: Annotated[str, Field(..., example="Follow the code of conduct.")] 
    criteria: Annotated[str, Field(..., example="Completion, Creativity")] 
    preferences: Annotated[str, Field(..., example="Fastest, Most Efficient")]
    terms: Annotated[str, Field(..., example="Standard competition terms.")] 
    agreement: Annotated[bool, Field(..., description="User has agreed to the terms.")] 
    company: Annotated[Optional[str], Field(None, example="Acme Inc.")] 
    host_uid: Annotated[Optional[str], Field(None)] 
    participants: Annotated[List[str], Field(...)] = Field([])


class Contest(BaseModel):
    title: str = Field(..., example="Coding Challenge")
    subTitle: str = Field(..., example="A challenge for coding enthusiasts.")
    description: str = Field(..., example="A challenge for coding enthusiasts.")
    type: str = Field(..., example="Coding")
    startDate: str = Field(..., example="2024-05-12T16:03:52+0300")
    endDate: str = Field(..., example="2024-05-12T16:03:52+0300")
    prizeDetails: str = Field(..., example="200 USD")
    maxParticipants: int = Field(..., example=3)
    rules: str = Field(..., example="Follow the code of conduct.")
    requirements: str = Field(..., example="Terms and conditions of the competition.")
    criteria: str = Field(..., example="Completion, Creativity")
    whatToBuild: str = Field(..., example="Build a web app.")
    agreement: bool = Field(..., description="User has agreed to the terms.")
    company: Optional[str] = Field(None, example="Acme Inc.")
    host_uid: Optional[str] = None
    participants: List[str] = []
    image_url: Optional[str] = None
    id: Optional[str] = Field(None, example="unique-contest-id")
    access_key: Optional[str] = Field(None, example="1234")  # Add this line


    @field_validator('title', 'description', 'rules', 'criteria', 'requirements', 'whatToBuild')
    def must_not_be_empty(cls, v):
        if not v or v.strip() == "":
            raise ValueError('This field must not be empty or just whitespace.')
        return v

    @field_validator('maxParticipants')
    def validate_max_participants(cls, v):
        if v < 1:
            raise ValueError('Maximum participants must be at least 1')
        return v

    @field_validator('agreement')
    def validate_agreement(cls, v):
        if not v:
            raise ValueError('Agreement must be true to proceed')
        return v

# class ContestModel(BaseModel):
#     title: str
#     description: str
#     start_date: datetime
#     end_date: datetime
#     user_id: str  # Reference to the user who created the contest

class Submission(BaseModel):
    contest_id: str
    participant_uid: str
    submission_link: str
    description: Optional[str] = None

class UserProfile(BaseModel):
    email: str
    uid: str
    role:str
    firstName: str
    lastName: str
    phone:str
    skills:str
    specialization:str


class ProjectSchema(BaseModel):
    name: str = Field(..., description="The name of the project")
    description: str = Field(..., description="A brief description of the project")
    start_date: date = Field(..., description="Project start date")
    end_date: Optional[date] = Field(None, description="Project end date, optional")

    def model_dump(self):
        # Convert the model to a dictionary suitable for Firestore
        return {
            "name": self.name,
            "description": self.description,
            "start_date": self.start_date.isoformat(),
            "end_date": self.end_date.isoformat() if self.end_date else None
        }
    # Add other fields as necessary
class UserProfileUpdateSchema(BaseModel):
    email:Optional[str] = None
    firstName: Optional[str] = None
    lastName: Optional[str] = None
    phone:Optional[str] = None
    skills:Optional[str] = None
    specialization:Optional[str] = None

class ContestUpdateSchema(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    skill_level: Optional[str] = None
    location: Optional[str] = None

class SubmissionSchema(BaseModel):
    participant_uid: str
    submission_link: str
    description: Optional[str] = None
    teammates: Optional[str] = None
    teammates_emails: Optional[List[EmailStr]] = None
    linkedin: Optional[HttpUrl] = None
    github: Optional[HttpUrl] = None
    youtube_video_link: Optional[HttpUrl] = None
    agree_to_rules: bool
class FeedbackSchema(BaseModel):
    contest_id: str
    uid: str  # The UID of the user submitting the feedback
    rating: int = Field(..., ge=1, le=5, description="Rating on a scale of 1 to 5")
    comments: Optional[str] = None
