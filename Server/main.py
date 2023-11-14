# main.py
from typing import Union
from fastapi import FastAPI, HTTPException, Request
from Src.queries import get_animales, get_personas, get_rentabilidad, get_ventas, login_query, User
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import psycopg2

app = FastAPI()

# Configuración de CORS (si es necesario)
origins = ["http://localhost", "http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    nombre: str
    apellido: str


@app.get("/animales")
def get_animales01():
    data = get_animales()  # Obtiene los datos de la tabla "animal"

    if data is not None:
        return data
    else:
        return {
            "message": "No se encontraron datos"
        }  # Manejo de ningún dato encontrado


@app.get("/personas")
def get_personas01():
    data = get_personas()  # Obtiene los datos de la tabla "persona"

    if data is not None:
        return data
    else:
        return {
            "message": "No se encontraron datos"
        }  # Manejo de ningún dato encontrado


@app.get("/ventas")
def get_ventas01():
    data = get_ventas()  # Obtiene los datos de la tabla "ventas"

    if data is not None:
        return {"datos": data}
    else:
        return {
            "message": "No se encontraron datos"
        }  # Manejo de ningún dato encontrado


@app.get("/rentabilidad")
def get_rentabilidad01():
    data = get_rentabilidad()  # Obtiene los datos de la tabla "rentabilidad"

    if data is not None:
        return {"datos": data}
    else:
        return {
            "message": "No se encontraron datos"
        }  # Manejo de ningún dato encontrado

from fastapi import Depends

# ...

@app.post("/login")
def login(user: User):
    data = login_query(user)  # Utiliza la función de queries.py

    if data is not None:
        return {"datos": data}
    else:
        return {"message": "No se encontraron datos"}  # Manejo de ningún dato encontrado
