const { DataTypes } = require('sequelize');
const { db } = require('../config/db');

const Categoria = db.define('Categoria', {
  categoria_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'categoria',
  timestamps: false  // Esto deshabilitará createdAt y updatedAt
});

module.exports = Categoria;