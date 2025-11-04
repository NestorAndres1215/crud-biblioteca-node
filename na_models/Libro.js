const mongoose = require('mongoose');
const { Schema } = mongoose;

const libroSchema = new Schema({
  idLibro: {
    type: String,
    required: [true, 'El ID del libro es obligatorio'],
    trim: true,
    unique: true
  },
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true
  },
  idEditorial: {
    type: Schema.Types.ObjectId,
    ref: 'Editorial',
    required: [true, 'La editorial es obligatoria']
  },
  idAutor: {
    type: Schema.Types.ObjectId,
    ref: 'Autor',
    required: [true, 'El autor es obligatorio']
  }
}, {
  versionKey: false,
  timestamps: true // createdAt y updatedAt
});

module.exports = mongoose.model('Libro', libroSchema);
