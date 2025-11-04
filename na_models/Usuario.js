const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
  idUsuario: {
    type: String,
    required: [true, 'El ID del usuario es obligatorio'],
    trim: true,
    unique: true
  },
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Ingrese un email válido']
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
    trim: true,
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres']
  }
}, {
  versionKey: false,
  timestamps: true // createdAt y updatedAt
});

module.exports = mongoose.model('Usuario', usuarioSchema);
