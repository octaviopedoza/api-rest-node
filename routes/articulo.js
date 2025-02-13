const express = require('express');
const router = express.Router();
const ArticuloController = require('../controllers/articulo')

router.get("/prueba", ArticuloController.prueba);

module.exports = router;