from fastapi import FastAPI
from . import models, schemas
from .database import engine

app = FastAPI()
models.Base.metadata.create_all(engine)

@app.get('/')
async def index():
    return{'data':'Herro my names Rajesh'}

@app.get('/items')
async def allItems():
    return{'data':{'Such items'}}

@app.get('/items/{cat_id}')
async def catalog(cat_id:int):
    return{'data':{cat_id}}

@app.get("/items/{cat_id}/{id}")
async def getItem(cat_id:int , id):
    return{'data':{cat_id:{id}}}