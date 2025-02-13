"# api-rest-node" 
1.- Preparamos el entorno para desarrollo local usando laragon, dentro de laragon debemos de tener instalado MongooDB y Robomongo.
2.- Iniciamos un proyecto en blanco dentro de nuestro laragon.
3.- Entramos desde terminal a la carpeta del proyecto y ejecutamos "npm init" para iniciar nuestro proyecto.
4.- Una vez realizado esto instalamos dependencias con lo siguiente: "npm i express -S", "npm i nodemon -S", "npm i cors -S", "npm i multer", "npm i mongoose -S", "npm i dotenv -S".
5.- Ahora vamos a crear un archivo index.js en la raiz del proyecto.
6.- Ahora vamos a crear una carpeta para la conexion de la DB y dentro creamos un archivo conexion.js para crear unestra conexion a la DB.
7.- dentro de este archivo de conexion vamos a requerir a mongoose con: "const mongoose = require('mongoose')".
8.- Creamos una funcion flecha asincrona donde dentro del try vamos a esperar la respuesta de: "mongoose.conect(url de conecxion);" y dentro del catch capturamos el error.
9.- Al final exportamos el modulo para su uso en otros archivos con: "module.exports = {nom. funcion flecha anterior};"
10.- Dentro del archivo indes.js vamos a requerir la conexion a la DB con: "const {conexion} = require('./mongoodb/conexion');"
11.- Creamos un console.log para verificar la conecxion y al final llamamos la funcion de la conexion con: "conexion();"
--------------------------------------------------------------------------------------
12.- Ahora vamos a crear el servidor http usando la siguiente linea en la parte superior del archivo index.js: "const express = require('express');"
13.- Tambien requerimos cors para solucionar errores de conexion con. "const cors = ('cors');"
14.- Debajo de "conexion();" vamos a agregar "const app = express();" y debajo "const puerto = 3900;" el puerto puede ser el que se requiera.
15.- Usamos cors para ejecutar antes de cargar rutas con: "app.use(cors());"
16.- Convertimos el body en un objeto js con: "app.use(express.json());"
17.- Creamos el servidor para escuchar peticiones http con: "app.listen(puerto, () => {console.log("Servidor corriendo en el puerto "+puerto); });
--------------------------------------------------------------------------------------
18.- Para crear una ruta por el momento lo vamos a hacer dentro del archivo index.js pero mas adelante estaran dentro de un controlador por separado, vamos a hacer un "app." y aqui vamos a utilizar
el metodo http que queramos usar por ejemplo: "app.get" y vamos a trabajar con la ruta probando por lo que quedaria de la siguiente manera: "app.get("/probando")" y como segundo parametro vamos a pasar la request y el resultado quedando de la siguiente anera: "app.get("/probando", (req,res)) => { console.log("ruta ejecutandose")}", con esto podemos ver que la ruta se ejecuta en consola.
19.- Siempre la pagina debe de devolver algo para mostrarlo por pantalla, entonces vamos a hacer "return" y devolvemos la respuesta junto a un estatus, el estatus sera el codigo http que podemos usar,
si es una peticion que devuelve algo con exito usaremos el codigo 200 ó un 404 si no encuentra el recurso, y podemos usar el metodo send para devolver algo entonces nuestra linea deberia quedar algo asi: 
"return res.status(200).send({
        curso: "Master en NodeJS",
        autor: "Octavio Pedroza",
        url: "http://localhost:3900/probando"
    });
Aqui estamos devolviendo un json usando el metodo send.
--------------------------------------------------------------------------------------
20.- Para crear nuestro controllador debemos de crear una carpeta en la reaíz del proyecto llamada "controllers", aqui dentro vamos a crear nuestro archivo el cual debera de llamarse igual que nuestro modelo con la diferencia de que la primer letra sera minuscula por ejemplo, si nuetro modelo se llama Articulo.js nuestro controlador se llamara articulo.js.
21.- Creamos un metodo de prueba con una constante prueba y lo que va a hacer es recibir como parametro el req y el res, el request son los datos que le llegan y el response los datos que responde o manda: "const test = (requ, res)".
22.- Con esto definimos nuestro metodo aperturando una funcion flecha donde vamos a hacer un return, vamos a hacer reques Status 200 para que devuelva una respuesta de exito y vamos a hacer JSon para que nos devuelva un json simple:
"return res.status(200).json({
    mensaje: "Soy una respuesta de accion al controlador de articulos"
});"
Esto es muy similar a lo realizado anteriormente.
23.- Ahora es muy importante saber que cada metodo que se crea lo tenemos que exportar al final del archivo:
"module.exports = { prueba }"
---------------------------------------------------------------------------------------
24.- Ahora vamos a crear un archivo llamado igual que el controlador dentro de una carpeta "routes" para manejar las rutas.
25.- Creamos una constante llamada express y el require express: "const express = require('express')".
26.- Creamos otra constante que se llamara router y llamamos al metodo router: "const router = express.Router()"
27.- Ahora vamos a definir la primera ruta, para crear una ruta dentro de Node usamos el objeto router y utilizamos uno de los metodos http que necesitamos, vamos a crear una ruta get por lo que le indicamos ala ruta el metodo http get, dentro de este metodo le pasamos dos parametros, primero el nombre de mi url por ejemplo puede ser "/" ó "/prueba" y despues le indicamos que metodo vamos a hacer o cargar por lo que vamos a cargar el controlador en la parte superior.
28.- Entonces vamos a agregar debajo de la constante router una nueva variable constante donde vamos a requerir la ruta del controlador: "const ArticuloController = require('../carpeta/nombre_archivo').
29.- Ahora agregamos este controlador dentro de la ruta que estamos creando seguido del metodo a usar en este caso el metodo prueba que creamos dentro del controlador, entonces la ruta quedaria asi: "router.get("/prueba", ArticuloController.prueba)"
30.- y al final vamos a exportar el modulo router: "module.exports = router;"
31.- Ahora dentro del index donde teniamos las rutas de prueba tenemos que definir todas nustras rutas y cargarlas dentro de app con el .use, entonces primero vamos a crear una constante para hacer el require de las rutas: "const rutas_articulo = require('../routes/articulo)" y aqui ya tenemos definidas nuestras rutas en index.
32.- Puedo cargar las rutas con un prefijo por delante si yo quisiera haciendo "app.use("/api", rutas_articulo)"