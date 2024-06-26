const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// API /categorias
router.post('/', categoriaController.crearCategoria);
router.get('/', categoriaController.obtenerCategorias);
router.put('/:categoria_id', categoriaController.actualizarCategoria);
router.get('/:categoria_id', categoriaController.obtenerCategoria);
router.delete('/:categoria_id', categoriaController.eliminarCategoria);

module.exports = router;