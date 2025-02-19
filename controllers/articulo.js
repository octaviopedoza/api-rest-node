const prueba = (req, res) => {

    return res.status(200).json({
        mensaje: "Soy un mensaje de respuesta al controlador de articulos"
    })
}

const create = (req, res) => {
    return res.status(200).json({
        mensaje: "Respuesta del controlador para crear"
    })
}

module.exports = { 
    prueba, 
    create 
};