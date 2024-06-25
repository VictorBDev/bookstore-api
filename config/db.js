const { Sequelize } = require('sequelize');
require('dotenv').config({ path: 'variables.env' });

const db = new Sequelize(process.env.DB_NOMBRE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  logging: false, //No ver las consultas SQL que se ejecutan
});

const conectarDB = async () => {
  try {
    await db.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
    
    // Sincroniza los modelos con la base de datos
    await db.sync({ force: false });
    console.log('Modelos sincronizados con la base de datos.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
    process.exit(1); // Detener la app
  }
};

module.exports = { db, conectarDB };