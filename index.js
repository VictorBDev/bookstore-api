const express = require('express');
const { db, conectarDB } = require('./config/db');
const cors = require('cors');
const { Libro, Categoria } = require('./models/associations');

// Creación del servidor
const app = express();

// Habilitar cors
app.use(cors());

// Habilitar express.json
app.use(express.json());

// Conectar a la base de datos
conectarDB()
  .then(() => {
    // Iniciar el servidor después de conectar a la base de datos
    app.listen(4000, () => {
      console.log("El servidor está corriendo en el puerto 4000");
    });
  })
  .catch(err => console.error('Error al iniciar la aplicación:', err));

// Rutas de la API
app.use('/api/libros', require('./routes/libro'));
app.use('/api/categorias', require('./routes/categoria'));
