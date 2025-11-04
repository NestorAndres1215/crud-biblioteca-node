const Libro=require('../na_models/Libro')
const MENSAJES = require('../util/mensajes');
module.exports.listar = async (req, res) => {
  try {
    const libros = await Libro.find({});
    res.render('libro', { libros });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.LIBRO.LISTAR_ERROR });
  }
};

// Insertar nuevo libro
module.exports.insertar = async (req, res) => {
  try {
    const { cod: idLibro, ti: titulo, edi: idEditorial, au: idAutor } = req.body;

    if (!idLibro || !titulo || !idEditorial || !idAutor) {
      return res.status(400).json({ message: MENSAJES.LIBRO.VALIDACION });
    }

    const libro = new Libro({ idLibro, titulo, idEditorial, idAutor });
    await libro.save();
    res.redirect('/libro');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.LIBRO.INSERTAR_ERROR });
  }
};

// Editar libro
module.exports.editar = async (req, res) => {
  try {
    const { e_id: id, e_cod: idLibro, e_ti: titulo, e_edi: idEditorial, e_au: idAutor } = req.body;

    if (!id || !idLibro || !titulo || !idEditorial || !idAutor) {
      return res.status(400).json({ message: MENSAJES.LIBRO.VALIDACION });
    }

    await Libro.findByIdAndUpdate(id, { idLibro, titulo, idEditorial, idAutor });
    res.redirect('/libro');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.LIBRO.ACTUALIZAR_ERROR });
  }
};

// Eliminar libro
module.exports.eliminar = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: MENSAJES.LIBRO.VALIDACION });

    await Libro.findByIdAndRemove(id);
    res.redirect('/libro');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.LIBRO.ELIMINAR_ERROR });
  }
};