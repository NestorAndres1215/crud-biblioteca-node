const mongoose = require('mongoose');
const { Schema } = mongoose;

const autorSchema = new Schema({
  idAutor: {
    type: String,
    required: [true, 'El ID del autor es obligatorio'],
    trim: true,
    unique: true
  },
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  },
  apellido: {
    type: String,
    required: [true, 'El apellido es obligatorio'],
    trim: true
  },
  pais: {
    type: String,
    required: [true, 'El país es obligatorio'],
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true // opcional, agrega createdAt y updatedAt
});

module.exports = mongoose.model('Autor', autorSchema);
