const Libro = require('./libro');
const Categoria = require('./categoria');

Libro.belongsTo(Categoria, { foreignKey: 'categoria_id', as: 'Categoria' });
Categoria.hasMany(Libro, { foreignKey: 'categoria_id', as: 'Libros' });

module.exports = { Libro, Categoria };