const { status } = require('express/lib/response');
const validator = require('validator');
const Articulo = require('../models/Articulo');
const prueba = (req, res) => {

    return res.status(200).json({
        mensaje: "Soy un mensaje de respuesta al controlador de articulos"
    })
}

const create = async(req, res) => {
    // Recoger los parametros por el metodo post
    let parametros = req.body;

    // Validar datos
    try {
      let validar_titulo = !validator.isEmpty(parametros.titulo); //variable para validar que el campo titulo no esta vacio
      let validar_contenido = !validator.isEmpty(parametros.contenido); //variable para validar que el campo contenido no esta vacio
      
      if(!validar_titulo || !validar_contenido){ //Se evalua si alguna variable es true, si alguno de los dos es true es por que esta vacio y lanza el mensaje de error
        throw new Error('Informacion no valida');// Mensaje de error a lanzar
      }
    } catch (error) {
        return res.status(400).json({
            status: "Error",
            mensaje: "Faltan datos por enviar"
        });
    }
    
    // Crear el objeto a guardar
    const articulo = new Articulo(parametros);

    // Asignar valores a objeto basado en el modelo (manual o automatico)

    // Guardar el objeto dentro de la DB ya con todos los datos dentro
    try{
        const articuloGuardado = await articulo.save();
    // Devolvemos el valor si se guarda correctamente
        return res.status(200).json({
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
    }
}

module.exports = { 
    prueba, 
    create 
};