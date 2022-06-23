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

# @app.get('/items', status_code=200)
# async def allItems(response: Response, db: Session = Depends(get_db)):
#     items = crud.get_items(db)
#     if not items:
#         response.status_code = status.HTTP_404_NOT_FOUND
#     return items


@app.get('/items/{category_id}', status_code=200)
async def catalog(db: Session = Depends(get_db), category_id: int = None, _name: Optional[str] = None, min: Optional[float]=None, max: Optional[float]=None):
    cat_items = crud.get_category_item(db, category_id,_name, min, max)
    if not cat_items:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail= f"Brak produktów w danej kategorii")
    return cat_items


@app.get('/single-item/{item_id}', status_code=200)
async def oneItem(db: Session = Depends(get_db), item_id: int = None):
    single_item = crud.get_single_item(db,item_id)
    if not single_item:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail= f"Nie ma tekiego produktu")
    return single_item


@app.get('/photo/{pid}', status_code=200)
async def photos( pid: int, db: Session = Depends(get_db)):
    photos = crud.get_photos(db, pid)
    if not photos:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail= f"Nie ma takich zdjęć")
    return photos
