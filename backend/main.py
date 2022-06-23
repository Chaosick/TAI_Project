from fastapi import FastAPI, Depends, Response, status, HTTPException
from . import models, schemas, crud
from .database import engine, SessionLocal
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
import requests

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


@app.post('/payment')
async def postPayment(user_info:schemas.user):
    params = {
        "grant_type": "client_credentials",
        "client_id": "145227",
        "client_secret": "12f071174cb7eb79d4aac5bc2f07563f"
    }

    get_access_token_url = "https://secure.payu.com/pl/standard/user/oauth/authorize"
    resp = requests.get(get_access_token_url, params=params)

    access_token = resp.json()["access_token"]

    order = {
        "notifyUrl": "http://localhost:3000/",
        "customerIp": "127.0.0.1",
        "merchantPosId": "145227",
        "description": "CH33MS",
        "currencyCode": "PLN",
        "totalAmount": user_info.cost,
        "buyer": {
            "firstName": user_info.firstname,
            "lastname": user_info.lastname,
            "phone": user_info.phone,
            "email": user_info.email,
            "language": "pl"
        },
        "products": [
            {
                "name": "Placeholder",
                "unitPrice": "100",
                "quantity": "1"
            }
        ]
    }

    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + access_token,
    }

    url="https://secure.payu.com/api/v2_1/orders"

    req = requests.post(url, json=order, headers=headers, allow_redirects=False)
    url_pay_success = req.json()["redirectUri"]
    temp = requests.get(url_pay_success)

    return url_pay_success
