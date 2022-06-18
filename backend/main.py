from fastapi import FastAPI
from typing import Optional
import schemas, models
from backend.database import engine

app = FastAPI()
models.Base.metadata.create_all(engine)

@app.get('/')
def index():
    return{'data':'Herro my names Rajesh'}

@app.get('/items')
def allItems():
    return{'data':{'Such items'}}

@app.get('/items/{cat_id}')
def catalog(cat_id:int):
    return{'data':{cat_id}}

@app.get("/items/{cat_id}/{id}")
def getItem(cat_id:int , id):
    return{'data':{cat_id:{id}}}