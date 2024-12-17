from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..models import tanka as tanka_models
from ..database import get_db

router = APIRouter()

@router.post("/reply", response_model=tanka_models.Reply)
def create_reply(reply: tanka_models.ReplyCreate, db: Session = Depends(get_db)):
    db_tanka = db.query(tanka_models.Tanka).filter(tanka_models.Tanka.id == reply.tanka_id).first()
    if db_tanka is None:
        raise HTTPException(status_code=404, detail="Tanka not found")
    db_reply = tanka_models.Reply(**reply.dict())
    db.add(db_reply)
    db.commit()
    db.refresh(db_reply)
    return db_reply