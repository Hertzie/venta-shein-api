let express = require("express");
let router = express.Router();
let CategoriaController = require('../controllers/categorias.controller');

router.get('/categorias', CategoriaController.getCategorias);

module.exports = router;
