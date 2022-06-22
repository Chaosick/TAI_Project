from fastapi import FastAPI, Depends, Response, status, HTTPException
from . import models, schemas, crud
from .database import engine, SessionLocal
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

origins = [
    "http://localhost:3000",
]

app = FastAPI()
models.Base.metadata.create_all(engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get('/items', status_code=200)
async def allItems(response: Response, db: Session = Depends(get_db)):
    items = crud.get_items(db)
    if not items:
        response.status_code = status.HTTP_404_NOT_FOUND
    return items


@app.get('/items/{cat_id}', status_code=200)
async def catalog(db: Session = Depends(get_db), cat_id: Optional[int]=None):
    cat_items = crud.get_category_item(db, cat_id)
    if not cat_items:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail= f"Brak produktów w danej kategorii")
    return cat_items
