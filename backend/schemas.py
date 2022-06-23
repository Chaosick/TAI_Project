from unicodedata import numeric
from pydantic import BaseModel

class product(BaseModel):
    p_id: int
    name: str
    atributes: str
    price: float
    preview: str
    category_id: int

class category(BaseModel):
    c_id: int
    name: str

class photo(BaseModel):
    ph_id: int
    name: str
    photo_base64: str
    product_id: int

class user(BaseModel):
    firstname: str
    lastname: str
    email: str
    phone: str
    cost: str
