# main.py
from typing import Union
from fastapi import FastAPI
from Src.queries import getAnimales, getPersonas, getRentabilidad, getVentas


app = FastAPI()


@app.get("/animales")
def animales():
    data = getAnimales()  # Obtiene los datos de la tabla "animal"

    if data is not None:
        return data
    else:
        return {
            "message": "No se encontraron datos"
        }  # Manejo de ningún dato encontrado


@app.get("/personas")
def personas():
    data = getPersonas()  # Obtiene los datos de la tabla "persona"

    if data is not None:
        return data
    else:
        return {
            "message": "No se encontraron datos"
        }  # Manejo de ningún dato encontrado


@app.get("/ventas")
def ventas():
    data = getVentas()  # Obtiene los datos de la tabla "ventas"

    if data is not None:
        return {"datos": data}
    else:
        return {
            "message": "No se encontraron datos"
        }  # Manejo de ningún dato encontrado


@app.get("/rentabilidad")
def rentabilidad():
    data = getRentabilidad()  # Obtiene los datos de la tabla "rentabilidad"

    if data is not None:
        return {"datos": data}
    else:
        return {
            "message": "No se encontraron datos"
        }  # Manejo de ningún dato encontrado
