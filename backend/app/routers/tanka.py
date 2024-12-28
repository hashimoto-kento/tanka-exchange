from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..models import tanka as tanka_models
from ..database import get_db
import random

router = APIRouter()

@router.post("/tanka", response_model=tanka_models.Tanka)
def create_tanka(tanka: tanka_models.TankaCreate, db: Session = Depends(get_db)):
    db_tanka = tanka_models.Tanka(content=tanka.content, author=tanka.author)
    db.add(db_tanka)
    db.commit()
    db.refresh(db_tanka)
    return db_tanka

@router.get("/tanka/random", response_model=tanka_models.Tanka)
def get_random_tanka(db: Session = Depends(get_db)):
    tankas = db.query(tanka_models.Tanka).all()
    if not tankas:
        raise HTTPException(status_code=404, detail="No tankas available")
    return random.choice(tankas)

