from sqlalchemy import Column, Integer, String
from ..database import Base

class Tanka(Base):
    __tablename__ = "tankas"

    id = Column(Integer, primary_key=True, index=True)
    content = Column(String, index=True)
    author = Column(String)

class Reply(Base):
    __tablename__ = "replies"

    id = Column(Integer, primary_key=True, index=True)
    content = Column(String, index=True)
    author = Column(String)
    tanka_id = Column(Integer)

