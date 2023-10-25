# src/queries.py
import psycopg2

def get_animal_data():
    try:
        Connection = psycopg2.connect(
            host="dpg-ck8s5cnq54js73ducea0-a.oregon-postgres.render.com",
            user="admin",
            password="oxwnA7YJfj4dCQd9aa1nDojvlEYhuchc",
            database="dbfincapp",
        )
        print("Conexión exitosa")
        cursor = Connection.cursor()
        cursor.execute("SELECT * FROM animal")
        rows = cursor.fetchall()
        print("Datos recuperados:", rows)  # Agregado para depuración
        Connection.close()  # Cerrar la conexión
        return rows
    except Exception as ex:
        print("Error en la consulta:", ex)  # Agregado para manejo de errores
        return str(ex)

def get_corral_data():
    try:
        Connection = psycopg2.connect(
            host="dpg-ck8s5cnq54js73ducea0-a.oregon-postgres.render.com",
            user="admin",
            password="oxwnA7YJfj4dCQd9aa1nDojvlEYhuchc",
            database="dbfincapp",
        )
        print("Conexión exitosa")
        cursor = Connection.cursor()
        cursor.execute("SELECT * FROM corral")
        rows = cursor.fetchall()
        print("Datos recuperados:", rows)  # Agregado para depuración
        Connection.close()  # Cerrar la conexión
        return rows
    except Exception as ex:
        print("Error en la consulta:", ex)  # Agregado para manejo de errores
        return str(ex)

def get_persona_data():
    try:
        Connection = psycopg2.connect(
            host="dpg-ck8s5cnq54js73ducea0-a.oregon-postgres.render.com",
            user="admin",
            password="oxwnA7YJfj4dCQd9aa1nDojvlEYhuchc",
            database="dbfincapp",
        )
        print("Conexión exitosa")
        cursor = Connection.cursor()
        cursor.execute("SELECT * FROM persona")
        rows = cursor.fetchall()
        print("Datos recuperados:", rows)  # Agregado para depuración
        Connection.close()  # Cerrar la conexión
        return rows
    except Exception as ex:
        print("Error en la consulta:", ex)  # Agregado para manejo de errores
        return str(ex)

def get_persona_animales_data():
    try:
        Connection = psycopg2.connect(
            host="dpg-ck8s5cnq54js73ducea0-a.oregon-postgres.render.com",
            user="admin",
            password="oxwnA7YJfj4dCQd9aa1nDojvlEYhuchc",
            database="dbfincapp",
        )
        print("Conexión exitosa")
        cursor = Connection.cursor()
        cursor.execute("SELECT * FROM persona_animales")
        rows = cursor.fetchall()
        print("Datos recuperados:", rows)  # Agregado para depuración
        Connection.close()  # Cerrar la conexión
        return rows
    except Exception as ex:
        print("Error en la consulta:", ex)  # Agregado para manejo de errores
        return str(ex)

def get_rentabilidad_data():
    try:
        Connection = psycopg2.connect(
            host="dpg-ck8s5cnq54js73ducea0-a.oregon-postgres.render.com",
            user="admin",
            password="oxwnA7YJfj4dCQd9aa1nDojvlEYhuchc",
            database="dbfincapp",
        )
        print("Conexión exitosa")
        cursor = Connection.cursor()
        cursor.execute("SELECT * FROM rentabilidad")
        rows = cursor.fetchall()
        print("Datos recuperados:", rows)  # Agregado para depuración
        Connection.close()  # Cerrar la conexión
        return rows
    except Exception as ex:
        print("Error en la consulta:", ex)  # Agregado para manejo de errores
        return str(ex)

def get_venta_data():
    try:
        Connection = psycopg2.connect(
            host="dpg-ck8s5cnq54js73ducea0-a.oregon-postgres.render.com",
            user="admin",
            password="oxwnA7YJfj4dCQd9aa1nDojvlEYhuchc",
            database="dbfincapp",
        )
        print("Conexión exitosa")
        cursor = Connection.cursor()
        cursor.execute("SELECT * FROM venta")
        rows = cursor.fetchall()
        print("Datos recuperados:", rows)  # Agregado para depuración
        Connection.close()  # Cerrar la conexión
        return rows
    except Exception as ex:
        print("Error en la consulta:", ex)  # Agregado para manejo de errores
        return str(ex)