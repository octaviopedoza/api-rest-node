const prueba = (req, res) => {

    return res.status(200).json({
        mensaje: "Soy un mensaje de respuesta al controlador de articulos"
    })
}

module.exports = { prueba };