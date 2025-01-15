# API de Inventario de Productos

Este proyecto implementa una API RESTful para gestionar un inventario de productos utilizando Nest.js y PostgreSQL. Permite realizar operaciones CRUD sobre los productos, y está documentada con Swagger.

## Requisitos

- Node.js >= 14.x
- PostgreSQL >= 12.x

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/lortiz24/horbath-technologies

2. Accede al directorio del proyecto

3. Instala las dependencias:

- npm install
- yarn

4. Crea un archivo .env en el directorio raíz del proyecto con las siguientes variables:


```
DATABASE_HOST=localhost       # La dirección del servidor de la base de datos.
DATABASE_PORT=5432           # El puerto donde está corriendo PostgreSQL.
DATABASE_USER=tu_usuario     # El nombre de usuario.
DATABASE_PASSWORD=tu_contraseña  # La contraseña del usuario de la base de datos.
DATABASE=tu_base_de_datos    # El nombre de la base de datos donde se almacenarán los productos.
```

5. Inicia el servidor:

- npm run start:dev 
- yarn start:dev



# Endpoints
- POST api/products: Crear un nuevo producto.
- GET api/products: Obtener una lista de todos los productos.
- GET api/products/:id: Obtener los detalles de un producto por ID.
- PATCH api/products/:id: Actualizar un producto por ID.
- DELETE api/products/:id: Eliminar un producto por ID.

# Validaciones
- El campo price debe ser un número decimal positivo.
- El campo quantity debe ser un número entero positivo.
- Todos los campos name, price y quantity son obligatorios.

# Documentación de la API
La API está documentada con Swagger y disponible en la siguiente URL una vez el servidor esté corriendo:

bash
Copiar código
http://localhost:3000/api

