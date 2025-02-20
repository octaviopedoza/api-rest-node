const prueba = (req, res) => {

    return res.status(200).json({
        mensaje: "Soy un mensaje de respuesta al controlador de articulos"
    })
}

const create = (req, res) => {
    // Recoger los parametros por el metodo post
    let parametros = req.body;
    
    // Validar datos

    // Crear el objeto a guardar

    // Asignar valores a objeto basado en el modelo (manual o automatico)

    // Guardar el objeto dentro de la DB ya con todos los datos dentro

    // Devolver el resultado
    return res.status(200).json({
        mensaje: "Respuesta del controlador para crear"
    })
}

module.exports = { 
    prueba, 
    create 
};