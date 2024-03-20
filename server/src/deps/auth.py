import uvicorn
from fastapi import FastAPI
import firebase_admin
from firebase_admin import credentials,auth
from pyrebase import pyrebase


if not firebase_admin._apps:
    cred = credentials.Certificate("src/deps/serviceAccountKey.json")
    firebase_admin.initialize_app(cred)


firebaseConfig = {
  "apiKey": "AIzaSyAiDbrNKNLcwKTdtH63tCy_3n-geNFO5OY",
  "authDomain": "fastapiauth-d3407.firebaseapp.com",
  "projectId": "fastapiauth-d3407",
  "storageBucket": "fastapiauth-d3407.appspot.com",
  "messagingSenderId": "1030156392220",
  "appId": "1:1030156392220:web:5599fe6970784742a20cd9",
  "measurementId": "G-KQ3JF7RS9F",  
  "databaseURL": ""
  
}
firebase = pyrebase.initialize_app(firebaseConfig)
