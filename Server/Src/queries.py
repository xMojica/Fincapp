from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import psycopg2


app = FastAPI()

# Configuración de CORS (si es necesario)
origins = ["http://localhost", "http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class User(BaseModel):
    nombre: str
    apellido: str


def connect_db():
    return psycopg2.connect(
        host="dpg-ck8s5cnq54js73ducea0-a.oregon-postgres.render.com",
        user="admin",
        password="oxwnA7YJfj4dCQd9aa1nDojvlEYhuchc",
        database="dbfincapp",
    )


# queries.py
def login_query(user: User):
    try:
        connection = connect_db()
        cursor = connection.cursor()
        cursor.execute(
            "SELECT * FROM persona WHERE nombre=%s AND apellido=%s",
            (user.nombre, user.apellido),
        )
        result = cursor.fetchone()
        cursor.close()
        connection.close()

        if result:
            return {"message": "Inicio de sesión exitoso"}
        else:
            raise HTTPException(status_code=401, detail="Credenciales inválidas")
    except Exception as ex:
        raise HTTPException(status_code=500, detail=f"Error en la consulta: {str(ex)}")


def execute_query(query):
    try:
        connection = connect_db()
        cursor = connection.cursor()
        cursor.execute(query)
        response = cursor.fetchall()
        for row in response:
            print(row)
        cursor.close()
        connection.close()
        return response
    except Exception as ex:
        print(f"Error en la consulta: {ex}")  # Agregado para manejo de errores
        return str(ex)


@app.get("/animales")
def get_animales():
    return execute_query("SELECT * FROM animal")


@app.get("/animales/lecheria")
def get_animalesl():
    return execute_query("SELECT * FROM animal WHERE categoria = 'Lechería'")


@app.get("/animales/genetica")
def get_animalesg():
    return execute_query("SELECT * FROM animal WHERE categoria = 'Genética'")


@app.get("/animales/engorde")
def get_animalese():
    return execute_query("SELECT * FROM animal WHERE categoria = 'Engorde'")


@app.get("/corrales")
def get_corral():
    return execute_query("SELECT * FROM corral")


@app.get("/personas")
def get_personas():
    return execute_query("SELECT * FROM persona")


@app.get("/rentabilidad")
def get_rentabilidad():
    return execute_query("SELECT * FROM rentabilidad")


@app.get("/ventas")
def get_ventas():
    return execute_query("SELECT * FROM venta")
