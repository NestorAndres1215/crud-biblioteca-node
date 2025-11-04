const mongoose = require('mongoose');
const { Schema } = mongoose;

const editorialSchema = new Schema({
  idEditorial: {
    type: String,
    required: [true, 'El ID de la editorial es obligatorio'],
    trim: true,
    unique: true
  },
  nombre: {
    type: String,
    required: [true, 'El nombre de la editorial es obligatorio'],
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true // opcional: createdAt y updatedAt
});

module.exports = mongoose.model('Editorial', editorialSchema);
