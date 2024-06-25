const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

// API /libros
router.post('/', libroController.crearLibro);
router.get('/', libroController.obtenerLibros);
router.put('/:libro_id', libroController.actualizarLibro);
router.get('/:libro_id', libroController.obtenerLibro);
router.delete('/:libro_id', libroController.eliminarLibro);

module.exports = router;