from configparser import InterpolationMissingOptionError
from http.client import NOT_FOUND
from urllib import response
from fastapi import FastAPI, Depends, Response, status, HTTPException
from . import models, schemas
from .database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()
models.Base.metadata.create_all(engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get('/items', status_code=200)
async def allItems(response: Response, db: Session = Depends(get_db)):
    items = db.query(models.Product).all()
    if not items:
        response.status_code = status.HTTP_404_NOT_FOUND
    return items

@app.get('/items/{cat_id}', status_code=200)
async def catalog(cat_id, response: Response, db: Session = Depends(get_db)):
    cat_items = db.query(models.Product).filter(models.Product.category_id == cat_id).all()
    if not cat_items:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail= f"Brak produktów w danej kategorii")
    return cat_items
