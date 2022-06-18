from backend.schemas import product
from .database import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Numeric, Table
from sqlalchemy.orm import relationship

class Product(Base):
    __tablename__ = "product"
    p_id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable = False)
    atributes = Column(String(5000), nullable = False)
    price = Column(Numeric(5,2), nullable = False)
    category_id = Column(Integer, ForeignKey("category.c_id"))

class Category(Base):
    __tablename__ = "category"
    c_id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable = False)

# class Cart(Base):
#     __tablename__ = "cart"
#     sc_id = Column(Integer, primary_key=True)
#     sum = Column(Numeric(6,2))

class Photo(Base):
    __tablename__ = "photo"
    ph_id = Column(Integer, primary_key=True)
    name = Column(String(500))
    photo_base64 = Column(String(60000))
    product_id = Column(Integer, ForeignKey("product.p_id"))






