"# api-rest-node" 
1.- Preparamos el entorno para desarrollo local usando laragon, dentro de laragon debemos de tener instalado MongooDB y Robomongo.
2.- Iniciamos un proyecto en blanco dentro de nuestro laragon.
3.- Entramos desde terminal a la carpeta del proyecto y ejecutamos "npm init" para iniciar nuestro proyecto.
4.- Una vez realizado esto instalamos dependencias con lo siguiente: "npm i express -S", "npm i nodemon -S", "npm i cors -S", "npm i multer", "npm i mongoose -S", "npm i dotenv -S", 
"npm i validator -S".
---------------------------------------------------------------------------------------
5.- Ahora vamos a crear un archivo index.js en la raiz del proyecto.
6.- Ahora vamos a crear una carpeta para la conexion de la DB y dentro creamos un archivo conexion.js para crear unestra conexion a la DB.
7.- Dentro de este archivo de conexion vamos a requerir a mongoose con: "const mongoose = require('mongoose')".
8.- Creamos una funcion flecha asincrona vacia: "const dbConection = async() =>{..." dentro tendremos nuestro try-catch.
8.1.- Donde dentro del try vamos a esperar la respuesta de: "mongoose.conect(url de conecxion);" y dentro del catch capturamos el error: 
    "catch (error) {
        console.log(error);
        throw new Error("No se a podido realizar la conecxión a la DB");
    }"
9.- Al final exportamos el modulo para su uso en otros archivos con: "module.exports = {nom. funcion flecha anterior};"
10.- Dentro del archivo indes.js vamos a requerir la conexion a la DB con: "const {conexion} = require('./mongoodb/conexion');", antes de esto devemos requerir: "require('dotenv').config();" para poder hacer uso de las variables dentro del archivo .env
11.- Creamos un console.log para verificar la conecxion:"console.log(app iniciada);" y al final llamamos la funcion de la conexion con: "conexion();"
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
21.- Creamos un metodo de prueba con una constante prueba y lo que va a hacer es recibir como parametro el req y el res, el request son los datos que le llegan y el response los datos que responde o manda: "const test = (req, res)".
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
---------------------------------------------------------------------------------------
33.- Ahora vamos a crear un endpoint ó lo que es lo mismo una ruta y en este caso sera para guardar un archivo ó crear un archivo dentro de la DB.
34.- Dentro del archivo de los controladores vamos a crear un nuevo metodo, vamos a crear una constante con el nombre de "create", entonces siguiendo la estructura anterior vamos a solicitar una req y una res y abrimos una funcion flecha donde vamos a indicar un return para que nos regrese la respuesta con un estatus 200, que nos devuelva un json con algo dentro lo cual quedaria algo asi: "const create = (req, res) => { return res.status(200).json({mensaje: "Accion de guardar" }) }".
35.- Realizado esto es importante que lo dovolvamos dentro del module.exports que se encuentra al final, ahora ya podemos crear su ruta.
36.- Dentro del archivo de rutas vamos a generarla usando router.post para poder mandar los datos por este metodo HTTP.
37.- La ruta quedaria algo asi: "router.post("/create", ArticuloControlador.create);"
---------------------------------------------------------------------------------------
38.- Dentro del postman vamos a pasarle por body los datos que son requeridos o que asignamos como requeridos dentro de nuestro modelo.
39.- Los datos los vamos a mandar desde Body y seleccionamos "x-www-form-urlencode"
40.- Como primer paso debemos de recoger los datos enviados por el post, por lo cual dentro del controlador de la ruta vamos a crear una variable donde vamos a almacenar dichos datos: "let parametros = req.body;"
41.- Actualmente nuestro index.js esta configurado para recibir .json, por lo que necesitamos hacer un ajuste agregando un middleware para procesar los datos como un .json viniendo de un formulario nosrmal, necesitamos agregar "app.use(express.urlencoded({extended:true}));". De esta manera express decodifica los datos para poder parcearlos dentro de un objeto .json.

42.- Ahora vamos a validar los datos usando la libreria Validator por lo que vamos a hacer un require de la libreria en la parte superior con: "const validator = require('validator')".
43.- Debajo de la variable creada anteriormente vamos a hacer un try y catch para verificar errores, dentro del "try{}" vamos a crear dos variables las cuales se van a encargar de hacer las validadciones, estas variables pueden ser: "let validar_titulo = !validator.isEmpty(parametros.titulo)" con esta linea validadmos que el campo de titulo no este vacio, debemos de hacer esto mismo para cada validación por ejemplo validamos que el contenido del articulo no este vacio con:"let validar_contenido = !validator.isEmpty(parametros.contenido)"
44.- Despues abrimos un bloque if para lanzar errorres dentro de las validaciones por ejemplo: "if(!validar_titulo || !validar_contenido){throw new Error("informacion no valida")}".
45.- Dentro del "catch{}" vamos a agregar la parte del error y regresamos un status 400, para esto agregamos las lineas:
    "catch(error){
        return res.status(400).json({
            status: "error",
            mensaje: "Faltan datos por enviar"
        });
    }
---------------------------------------------------------------------------------------
46.- Ahora vamos a usar el modelo para hacer el guardado de los datos dentro de la DB.
47.- Dentro del archivo de los controladores vamos a hacer un require de nuestro modelo haciendo: const Articulo = require("../models/Articulo").
48.- Como mongoose necesita realizar el guardado de los datos usando async y await vamos a agregar un "async" dentro de la constante del controlador create: "const create = async(req, res) =>..."
49.- Vamos a crear un objeto dentro del controlador para guardar la informacion que se nos esta pasando por el formulario = "const articulo = new Articulo(parametros);".
50.- Justo despues de esta linea anterior vamos a hacer uso de "try - catch" donde vamos a utilizar el await para esperar el objeto que vamos a guardar:
     "const articuloGuardado = await articulo.save();"
51.- y ya solo resta devolver la respuesta de exito y la de error lo cual podemos hacer como anteriormente:
    "return res.status(200).json({
            status: "success",
            articulo: articuloGuardado,
            mensaje: "Articulo guardado exitosamente"
        });
    }catch(error){
        return res.status(400).json({
            status: "error",
            mensaje: "Error al guardar los datos dentro de la DB",
            error: error.message
        });
    }"
------------------------------------------------------------------------------------------
Como ordenar los resultados
### Función `list` para obtener registros de tanques

52.- Esta función es un **manejador de ruta** en un servidor hecho con Node.js. Cuando alguien hace una solicitud (request) a la ruta correspondiente, esta función obtiene los datos de la base de datos, aplica filtros de fecha y devuelve una lista de tanques o un error. A continuación, explico cada parte de la función:
"const list = async (req, res) => {
    try {"
- **`async`**: Esto indica que esta función va a trabajar con procesos que toman tiempo (como consultas a una base de datos). Usamos **`await`** dentro de la función para esperar que se completen esos procesos antes de continuar con el código.
**`req`**: Es el objeto que contiene toda la información sobre la solicitud que hizo el usuario (como parámetros y datos enviados).
**`res`**: Es el objeto con el que vamos a enviar una respuesta al usuario después de procesar la solicitud.
53.- **Obteniendo los parámetros de fecha**
"const {startDate, endDate} = req.query;"
**`req.query`**: Esto obtiene los parámetros que el usuario haya enviado en la URL, específicamente en la parte de consulta (por ejemplo, `?startDate=2025-01-01&endDate=2025-03-10`).
**`startDate`** y **`endDate`**: Son las fechas de inicio y fin que el usuario puede enviar para filtrar los resultados.
54.- **Creando el filtro de fechas**
"let filtrosFecha = {};"
**`filtrosFecha`**: Es un objeto vacío que vamos a usar para almacenar las condiciones de filtro de fechas.
"if (startDate) {
    filtrosFecha.fecha = { $gte: new Date(startDate) }; // Fechas mayores o iguales a startDate
}"
Si el usuario ha enviado una **`startDate`** (fecha de inicio), se agrega una condición al filtro que dice "fecha mayor o igual a `startDate`".
"if (endDate) {
    filtrosFecha.fecha = filtrosFecha.fecha || {}; // Si ya existe un filtro mantenemos
    filtrosFecha.fecha.$lte = new Date(endDate); // Fechas menores o iguales a endDate
}"
Si el usuario ha enviado una **`endDate`** (fecha de fin), se agrega otra condición al filtro que dice "fecha menor o igual a `endDate`".
55.- **Consultando la base de datos**
"const tanque = await Tanques.find({}).sort({ fecha: -1 });"
**`Tanques.find({})`**: Busca todos los registros en la colección de "Tanques" de la base de datos. Si pasamos un objeto vacío `{}`, significa que no hay ningún filtro específico para la consulta.
**`.sort({ fecha: -1 })`**: Esto ordena los resultados de la base de datos de forma descendente (de la más reciente a la más antigua) según la fecha.
56.- **Manejo de errores y respuesta**
"if (!tanque || tanque.length === 0) {
    return res.status(404).json({
        status: "error",
        mensaje: "No se encontraron registros de tanques"
    });
}"
Si no se encuentran tanques en la base de datos (`tanque` está vacío), la función devuelve un **error 404**, lo que significa que no se encontraron datos.
"return res.status(200).json({
    status: "success",
    tanques: tanque
});"
Si todo sale bien y se encuentran los registros, se devuelve una respuesta con código **200 (éxito)**, y el cuerpo de la respuesta contiene los datos de los tanques.
57.- **Manejo de errores en la base de datos**
"} catch (error) {
    return res.status(500).json({
        status: "error",
        mensaje: "Error en la consulta de la DB",
        error: error.message
    });
}"
Si algo sale mal (por ejemplo, un error en la base de datos), la función captura ese error y devuelve una respuesta con el código **500 (error del servidor)**.
### Resumen
Esta función permite:
1. Filtrar los registros de los tanques por fechas, si el usuario proporciona las fechas de inicio y fin.
2. Consultar los registros de los tanques ordenados por fecha de forma descendente (de lo más reciente a lo más antiguo).
3. Enviar una respuesta al usuario con los registros encontrados o un mensaje de error si no se encuentran registros o si ocurre un problema.
La función está diseñada para que el usuario pueda filtrar por fechas opcionales y obtener los resultados de la base de datos de manera eficiente.
-----------------------------------------------------------------------------------------------------
Obtener un solo registro
### Función `uno` para obtener un solo artículo (tanque)
58.- Esta función está diseñada para obtener un artículo (tanque) específico desde la base de datos usando su **ID**. Si el artículo existe, lo devuelve al usuario; si no, muestra un error. Además, si ocurre algún error durante la consulta, lo maneja adecuadamente.
```js
const uno = async (req, res) => {
```
**`async`**: Marca la función como asincrónica, lo que significa que usará **`await`** para esperar la respuesta de la base de datos antes de continuar.
**`req`**: Es el objeto de la solicitud. Contiene los parámetros que el usuario envía, como el **ID** del artículo (tanque) en la URL.
**`res`**: Es el objeto de respuesta. A través de él, se enviará la respuesta al usuario.
59.- **Recogiendo el ID de la URL**
```javascript
let id = req.params.id;
```
**`req.params.id`**: Obtiene el **ID** del artículo desde la URL de la solicitud. En una ruta como `/tanques/:id`, `id` sería el valor que el usuario pasa en la URL (por ejemplo: `/tanques/12345`).
60.- **Buscando el artículo en la base de datos**
```javascript
const tanque = await Tanques.findById(id);
```
**`Tanques.findById(id)`**: Es un método de Mongoose que busca un documento en la colección de "Tanques" con el ID proporcionado. Usa **`await`** para esperar a que se complete la búsqueda en la base de datos.
**`await`**: Hace que el código espere hasta que la consulta a la base de datos se complete antes de continuar. Esto evita que el código siga ejecutándose mientras espera la respuesta.
61.- **Comprobando si el artículo fue encontrado**
```javascript
if (!tanque) {
    return res.status(404).json({
        status: "error",
        mensaje: "No se ha encontrado el articulo"
    });
}
```
**`if (!tanque)`**: Si no se encuentra un artículo con el **ID** proporcionado (es decir, `tanque` es `null` o `undefined`), se devuelve una respuesta con el código **404**, que significa "No encontrado". Además, se envía un mensaje de error en el cuerpo de la respuesta.
62.- **Devolviendo la respuesta exitosa**
```javascript
return res.status(200).json({
    status: "success",
    tanque: tanque
});
```
Si se encuentra el artículo, se devuelve una respuesta con el código **200** (éxito) y el artículo encontrado (`tanque`) en formato JSON. Esto es lo que el usuario verá como resultado de su solicitud.
63.- **Manejo de errores**
```javascript
} catch (error) {
    return res.status(500).json({
        status: "error",
        mensaje: "Error al buscar el artículo",
        error: error.message
    });
}
```
**`try/catch`**: El bloque `try` ejecuta la consulta, y si ocurre algún error (por ejemplo, problemas de conexión con la base de datos), el bloque `catch` captura ese error.
**`res.status(500)`**: Si ocurre un error, se devuelve una respuesta con el código **500**, que significa "Error interno del servidor". Además, se incluye el mensaje de error generado por la base de datos (`error.message`), lo que ayuda a identificar el problema.
### Resumen
Esta función hace lo siguiente:
1. **Recoge el ID** de la URL de la solicitud.
2. **Busca un artículo** (tanque) en la base de datos utilizando ese ID.
3. Si el artículo **no se encuentra**, devuelve un **error 404** con un mensaje que indica que el artículo no fue encontrado.
4. Si el artículo se **encuentra correctamente**, devuelve una respuesta exitosa (**200**) con los datos del artículo.
5. Si hay un **error** en el proceso (por ejemplo, problemas con la base de datos), devuelve un **error 500** con detalles sobre el error.
Este código permite que el usuario obtenga un solo tanque a partir de su ID de forma eficiente, manejando los posibles errores de manera clara y profesional.