from pydantic import BaseModel

class TankaBase(BaseModel):
    content: str
    author: str

class TankaCreate(TankaBase):
    pass

class Tanka(TankaBase):
    id: int

    class Config:
        orm_mode = True

class ReplyBase(BaseModel):
    content: str
    author: str
    tanka_id: int

class ReplyCreate(ReplyBase):
    pass

class Reply(ReplyBase):
    id: int

    class Config:
        orm_mode = True