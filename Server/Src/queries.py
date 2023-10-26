import psycopg2


def getAnimales():
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
        response = cursor.fetchall()
        for row in response:
            print(row)
        return response

        cursor.close()
        connection.close()

    except Exception as ex:
        print("Error en la consulta:", ex)
        return str(ex)


def getPersonas():
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
        response = cursor.fetchall()
        for row in response:
            print(row)
        return response

        cursor.close()
        connection.close()
    except Exception as ex:
        print("Error en la consulta:", ex)  # Agregado para manejo de errores
        return str(ex)


def getRentabilidad():
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
        response = cursor.fetchall()
        for row in response:
            print(row)
        return response

        cursor.close()
        connection.close()
    except Exception as ex:
        print("Error en la consulta:", ex)  # Agregado para manejo de errores
        return str(ex)


def getVentas():
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
        response = cursor.fetchall()
        for row in response:
            print(row)
        return response

        cursor.close()
        connection.close()
    except Exception as ex:
        print("Error en la consulta:", ex)  # Agregado para manejo de errores
        return str(ex)
