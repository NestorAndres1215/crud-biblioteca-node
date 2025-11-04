const mongoose = require('mongoose');
const MENSAJES = {
  CONEXION_OK: '✅ Conectado a MongoDB',
  CONEXION_ERROR: '❌ Error al conectar con MongoDB'
};

// URL de conexión
const url = process.env.MONGO_URI || 'mongodb://0.0.0.0:27017/biblioteca';

// Opciones recomendadas de Mongoose
const opciones = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Conexión
mongoose.connect(url, opciones);

const db = mongoose.connection;

db.on('error', (error) => console.error(`${MENSAJES.CONEXION_ERROR}:`, error));
db.once('open', () => console.log(MENSAJES.CONEXION_OK));

module.exports = db;
