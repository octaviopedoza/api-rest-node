const {conexion} = require('./mongoodb/conexion'); //Requerimos la conexion a la DB
const express = require('express');
const cors = require('cors');
const rutas_articulo = require('./routes/articulo');

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
app.use(express.urlencoded({extended:true}));

//Rutas por controlador
app.use('/api', rutas_articulo);

// Crear rutas hardcodeadas
app.get("/probando", (req, res) => {
    console.log("se a ejecutado el endpoint probando");
    return res.status(200).send({
        curso: "Master en NodeJS",
        autor: "Octavio Pedroza",
        url: "http://localhost:3900/probando"
    });
})

//Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto "+puerto);
});