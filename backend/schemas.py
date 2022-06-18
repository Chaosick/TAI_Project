from pydantic import BaseModel

class product(BaseModel):
    p_id: int
    name: str
    atributes: str
    price: float
