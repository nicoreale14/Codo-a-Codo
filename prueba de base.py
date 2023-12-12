import mysql.connector

# Establecer la conexión con tu base de datos MySQL
conexion = mysql.connector.connect(
    host="tu_host",
    user="tu_usuario",
    password="tu_contraseña",
    database="tu_base_de_datos"
)

if conexion.is_connected():
    print("Conexión exitosa")

# Realizar operaciones con la base de datos

# Cerrar la conexión al finalizar
conexion.close()
