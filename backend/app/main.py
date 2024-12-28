from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import tanka, reply
from .database import engine
from .models import database_models

database_models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(tanka.router)
app.include_router(reply.router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

