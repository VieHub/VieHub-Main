from fastapi import APIRouter
from src.routes import (
    users,contests

)

# contains all the routes under /api
router = APIRouter(prefix="/api")

router.include_router(router=users.router)
router.include_router(router=contests.router)

