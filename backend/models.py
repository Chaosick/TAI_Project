from .database import Base
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship


class product(Base):
    __tablename__ = 'Product'
    p_id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    atributes = Column(String)
    price = Column(float)

