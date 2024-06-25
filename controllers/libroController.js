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
    let libro = await Libro.findById(req.params.libro_id);
    //const libro = await Libro.findByPk(libro_id);

    if (!libro) {
      res.status(404).json({ msg: 'No existe el libro' });
    }
    
    libro.titulo = titulo;
    libro.autor = autor;
    libro.descripcion = descripcion;
    libro.precio = precio;
    libro.stock = stock;
    libro.categoria_id = categoria_id;
    libro = await Libro.findOneAndUpdate({ _id: libro_id }, libro, { new: true });

    res.json(libro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Hubo un error al actualizar el libro', error: error.message });
  }
};

exports.obtenerLibro = async (req, res) => {
  try {
    let libro = await Libro.findById(req.params.libro_id);
    //estaba como findByPk
    // const libro = await Libro.findByPk(libro_id, {
    //   include: [{ model: Categoria, as: 'Categoria' }]
    // });

    if (!libro) {
      res.status(404).json({ msg: 'No existe el libro' });
    }
    res.json(libro);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};

exports.eliminarLibro = async (req, res) => {
  try {

    let libro = await Libro.findById(req.params.libro_id);
    // const { libro_id } = req.params;
    // const libro = await Libro.findByPk(libro_id);

    if (!libro) {
      res.status(404).json({ msg: 'No existe el libro' });
    }

    await libro.findByIdAndDelete({ libro_id: req.params.libro_id });
    res.json({ msg: 'Libro eliminado correctamente' });
    
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error');
  }
};