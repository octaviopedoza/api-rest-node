const {conexion} = require('./mongoodb/conexion'); //Requerimos la conexion a la DB
const express = require('express');
const cors = require('cors');

//Inicializa app
console.log("app de node arrancada");

//conectamos a DB
conexion();

//Crea un servidor Node
const app = express();
const puerto = 3900;

//Configuramos cors para ejecutarse antes de cargar una ruta
app.use(cors());

//Convertir body a objeto js
app.use(express.json());

// Crear rutas


//Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto "+puerto);
});