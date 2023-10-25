# main.py
from typing import Union
from fastapi import FastAPI
from src.queries import get_animal_data, get_corral_data, get_persona_data, get_persona_animales_data, get_rentabilidad_data, get_venta_data
app = FastAPI()

@app.get("/api/animal")
def read_root():
    return "HOLA SI FUNCIONA"

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/animal")
def get_animal_data_route():
    data = get_animal_data()  # Obtiene los datos de la tabla "animal"
    
    if data is not None:
        return {"Datos tabla animal": data}
    else:
        return {"Datos tabla animal": "No se encontraron datos"}  # Manejo de ningún dato encontrado
    
@app.get("/corral")
def get_corral_data_route():
    data = get_corral_data()  # Obtiene los datos de la tabla "corral"
    
    if data is not None:
        return {"Datos tabla corral": data}
    else:
        return {"Datos tabla corral": "No se encontraron datos"}  # Manejo de ningún dato encontrado
    
@app.get("/persona")
def get_persona_data_route():
    data = get_persona_data()  # Obtiene los datos de la tabla "persona"
    
    if data is not None:
        return {"Datos tabla persona": data}
    else:
        return {"Datos tabla persona": "No se encontraron datos"}  # Manejo de ningún dato encontrado

@app.get("/persona_animales")
def get_persona_animales_data_route():
    data = get_persona_animales_data()  # Obtiene los datos de la tabla "persona_animales"
    
    if data is not None:
        return {"Datos tabla persona_animales": data}
    else:
        return {"Datos tabla persona_animales": "No se encontraron datos"}  # Manejo de ningún dato encontrado

@app.get("/rentabilidad")
def get_rentabilidad_data_route():
    data = get_rentabilidad_data()  # Obtiene los datos de la tabla "rentabilidad"
    
    if data is not None:
        return {"Datos tabla rentabilidad": data}
    else:
        return {"Datos tabla rentabilidad": "No se encontraron datos"}  # Manejo de ningún dato encontrado

@app.get("/venta")
def get_venta_data_route():
    data = get_venta_data()  # Obtiene los datos de la tabla "venta"
    
    if data is not None:
        return {"Datos tabla venta": data}
    else:
        return {"Datos tabla venta": "No se encontraron datos"}  # Manejo de ningún dato encontrado