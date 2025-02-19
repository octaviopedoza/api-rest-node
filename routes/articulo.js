const express = require('express');
const router = express.Router();
const ArticuloController = require('../controllers/articulo')

router.get("/prueba", ArticuloController.prueba);

router.post("/create", ArticuloController.create);


module.exports = router;