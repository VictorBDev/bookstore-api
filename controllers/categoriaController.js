const Categoria = require('../models/categoria');

// Crear una nueva categoría
exports.crearCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.json(categoria);
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error');
  }
};

// Obtener todas las categorías
exports.obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error');
  }
};

// Actualizar una categoría
exports.actualizarCategoria = async (req, res) => {
  try {
    const { categoria_id } = req.params;
    const categoria = await Categoria.findByPk(categoria_id);

    if (!categoria) {
      return res.status(404).json({ msg: 'No existe la categoría' });
    }

    await categoria.update(req.body);
    res.json(categoria);
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error');
  }
};

// Obtener una categoría por id
exports.obtenerCategoria = async (req, res) => {
  try {
    const { categoria_id } = req.params;
    const categoria = await Categoria.findByPk(categoria_id);

    if (!categoria) {
      return res.status(404).json({ msg: 'No existe la categoría' });
    }
    res.json(categoria);
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error');
  }
};

// Eliminar una categoría
exports.eliminarCategoria = async (req, res) => {
  try {
    const { categoria_id } = req.params;
    const categoria = await Categoria.findByPk(categoria_id);

    if (!categoria) {
      return res.status(404).json({ msg: 'No existe la categoría' });
    }

    await categoria.destroy();
    res.json({ msg: 'Categoría eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error');
  }
};
