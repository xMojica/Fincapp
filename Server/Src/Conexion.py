import psycopg2

try:
    Connection = psycopg2.connect(
        host="dpg-ck8s5cnq54js73ducea0-a.oregon-postgres.render.com",
        user="admin",
        password="oxwnA7YJfj4dCQd9aa1nDojvlEYhuchc",
        database="dbfincapp",
    )
    print("coneccion exitosa")
    cursor = Connection.cursor()
    cursor.execute("SELECT RAZA FROM animal")
    rows = cursor.fetchall()
    for row in rows:
        print(row)
except Exception as ex:
    print(ex)
