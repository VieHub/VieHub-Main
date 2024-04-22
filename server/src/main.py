# type: ignore
from src.routes.index import router
from contextlib import asynccontextmanager
from fastapi.responses import RedirectResponse
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from middleware.auth_middleware import jwt_auth_middleware




# initiate lifespan context
# @asynccontextmanager
# async def lifespan(app: FastAPI):
#     # preinit
#     # init prisma
#     from src.deps.redis import client

#     await db.connect()
#     yield

#     # cleanup
#     # de init prisma
#     await db.disconnect()
#     await client.aclose()


# initiate fastapi
app = FastAPI(
    title="Vie Hub",
    description="""
    Routes here are just for debugging
        """,
)

# load api routes

app.include_router(router=router)


# add middleware
@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    import time

    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response

app.middleware("http")(jwt_auth_middleware)


# listen to root
@app.get("/", include_in_schema=False)
def read_root():
    return RedirectResponse("/docs")


origins = [

    "http://localhost",
    "http://localhost:8000",
    "http://localhost:4173",
   
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
