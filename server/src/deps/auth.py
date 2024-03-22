import uvicorn
from fastapi import FastAPI
import firebase_admin
from firebase_admin import credentials, auth
from pyrebase import pyrebase
import os
from dotenv import load_dotenv
from firebase_admin import firestore

# Load environment variables
load_dotenv()

if not firebase_admin._apps:
    cred = credentials.Certificate(os.environ["FIREBASE_SERVICE_ACCOUNT_KEY_JSON"])
    firebase_admin.initialize_app(cred)

firebaseConfig = {
    "apiKey": os.environ["FIREBASE_API_KEY"],
    "authDomain": os.environ["FIREBASE_AUTH_DOMAIN"],
    "projectId": os.environ["FIREBASE_PROJECT_ID"],
    "storageBucket": os.environ["FIREBASE_STORAGE_BUCKET"],
    "messagingSenderId": os.environ["FIREBASE_MESSAGING_SENDER_ID"],
    "appId": os.environ["FIREBASE_APP_ID"],
    "measurementId": os.environ["FIREBASE_MEASUREMENT_ID"],
    "databaseURL": os.environ["FIREBASE_DATABASE_URL"]
}

firebase = pyrebase.initialize_app(firebaseConfig)
db = firestore.client()
