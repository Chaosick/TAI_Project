from .database import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float
from sqlalchemy.orm import relationship


class Product(Base):
    __tablename__ = "product"
    p_id = Column(Integer, primary_key=True)
    name = Column(String)
    atributes = Column(String)
    price = Column(Float)

