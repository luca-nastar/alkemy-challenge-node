# Challenge de Alkemy

Esta es la API creada en base al Challenge propuesto por Alkemy

## Descripcion

Esta API permite conocer y modificar personajes de peliculas de Disney y saber en que peliculas participaron. Tambien permite registarse y hacer login con tu usuario.

## Login de ejemplo

- username: usuario1
- password: usuario1

## Endpoints

### [Documentacion de Postman](https://documenter.getpostman.com/view/13628865/U16gRTHZ).

### Users

- POST "/auth/login": Realiza una comprobacion de los datos recibidos (username,password) y devuelve un Token con la informacion del usuario.
- POST "/auth/register/: Crea un nuevo usuario con los datos recibidos (full_name, email, username, password).

### Characters

- GET "/api/characters": Obtiene una lista de los personajes. Se puede buscar por name y filtrar por age y weight.
- POST "/api/characters" : Agrega un personaje a la base de datos con los datos recibidos (name, age, weight, history, image).
- PUT "/api/characters/:id": Edita los datos que recibe de un personaje segun su ID.
- DELETE "/api/characters/:id": Desactiva un personaje segun su ID.

### Movies

- GET "/api/movies": Obtiene una lista de las peliculas. Se puede buscar por title y ordenar por año de lanzamiento de forma ASC o DESC.
- POST "/api/movies": Agrega una pelicula con los datos recibidos (title, release_date, rating, cover_img).
- PUT "/api/movies/:id": Edita los datos que recibe de una pelicula segun su ID
- DELETE "/api/movies/:id": Desactiva una pelicula segun su ID

## Instalacion

- Clonar el proyecto usando `git clone https://github.com/luca-nastar/alkemy-challenge-node`.
- Importar la base de datos que esta en la carpeta "src/Database".
- Crear el archivo ".env" a partir del archivo ".envExample".
- Ejecutar `npm install` o `yarn` en la carpeta del proyecto.
- Ejecutar `npm start` o `node` en la terminal.
