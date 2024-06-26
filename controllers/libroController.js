const Libro = require('../models/libro');
const Categoria = require('../models/categoria');

exports.crearLibro = async (req, res) => {
  try {
    let libro;

    libro = new Libro (req.body);

    await libro.save();
    res.send(libro);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};

exports.obtenerLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll({
      include: [{ model: Categoria, as: 'Categoria' }]
    });
    res.json(libros);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};

exports.actualizarLibro = async (req, res) => {
  try {
    const { libro_id } = req.params;
    //add const
    const { titulo, autor, descripcion, precio, stock, categoria_id } = req.body;

    //usa findByPk(Sequelize) en lugar de findOne
    let libro = await Libro.findByPk(libro_id)

    if (!libro) {
      res.status(404).json({ msg: 'No existe el libro' });
    }
    
    //usa update en lugar de save para actualizar
    await libro.update({
      titulo,
      autor,
      descripcion,
      precio,
      stock,
      categoria_id
    });

    res.json(libro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Hubo un error al actualizar el libro', error: error.message });
  }
};

exports.obtenerLibro = async (req, res) => {
  try {

    let libro = await Libro.findByPk(req.params.libro_id);

    if (!libro) {
      res.status(404).json({ msg: 'No existe el libro' });
    }
    res.json(libro);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};

// Obtener todos los libros
exports.obtenerLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll({
      include: [{ model: Categoria, as: 'Categoria', attributes: ['nombre'] }]
    });
    res.json(libros);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};

exports.eliminarLibro = async (req, res) => {
  try {

    let libro = await Libro.findByPk(req.params.libro_id);

    if (!libro) {
      res.status(404).json({ msg: 'No existe el libro' });
    }
    //de findOneAndDelete a destroy
    await libro.destroy({ libro_id: req.params.libro_id });
    res.json({ msg: 'Libro eliminado correctamente' });

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};