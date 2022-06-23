from sqlalchemy.orm import Session
from . import models, schemas
from typing import Optional


def get_items(db: Session):
    return db.query(models.Product).all()

def get_category_item(db: Session, cat: int, _name: str, min: float, max: float):
    if cat is 0:
        return (db.query(models.Product)
        .filter(_name is None or models.Product.name.contains(_name))
        .filter(min is None or models.Product.price >= min)
        .filter(max is None or models.Product.price <= max).all())
    else:
        return (db.query(models.Product)
        .filter(cat is None or models.Product.category_id == cat)
        .filter(_name is None or models.Product.name.contains(_name))
        .filter(min is None or models.Product.price >= min)
        .filter(max is None or models.Product.price <= max).all())

def get_single_item(db: Session, id: int):
    return db.query(models.Product).filter(models.Product.p_id == id).all()

def get_photos(db: Session, prod_id: int):
    return db.query(models.Photo).filter(models.Photo.product_id == prod_id).all()