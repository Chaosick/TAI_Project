from sqlalchemy.orm import Session
from . import models, schemas
from typing import Optional


def get_items(db: Session):
    return db.query(models.Product).all()


def get_category_item(db: Session, cat: Optional[int]):
    return db.query(models.Product).filter(cat is None or models.Product.category_id == cat)

def get_items_price(db: Session, _name: Optional[str] = None, min: Optional[float] = None, max: Optional[float] = None):
    return db.query(models.Product).filter(_name is None or _name.lower in models.Product.name.lower).filter(min is None or models.Product.price > min).filter(max is None or models.Product.price < max)