const express = require('express');
const router = express.Router();
const ArticuloController = require('../controllers/articulo')

// Rutas get
router.get("/prueba", ArticuloController.prueba);

//Rutas post
router.post("/create", ArticuloController.create);

// Ruta put


// Rutas delete

module.exports = router;