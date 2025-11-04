const Editorial =require ('../na_models/Editorial')
const MENSAJES = require('../util/mensajes');
// Listar editoriales
module.exports.listar = async (req, res) => {
  try {
    const editoriales = await Editorial.find({});
    res.render('editorial', { editoriales });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.EDITORIAL.LISTAR_ERROR });
  }
};

// Insertar nueva editorial
module.exports.insertar = async (req, res) => {
  try {
    const { codi: idEditorial, edit: editorial } = req.body;

    if (!idEditorial || !editorial) {
      return res.status(400).json({ message: MENSAJES.EDITORIAL.VALIDACION });
    }

    const nuevaEditorial = new Editorial({ idEditorial, editorial });
    await nuevaEditorial.save();
    res.redirect('/editorial');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.EDITORIAL.INSERTAR_ERROR });
  }
};

// Editar editorial
module.exports.editar = async (req, res) => {
  try {
    const { e_id: id, e_edi: idEditorial, e_edit: editorial } = req.body;

    if (!id || !idEditorial || !editorial) {
      return res.status(400).json({ message: MENSAJES.EDITORIAL.VALIDACION });
    }

    await Editorial.findByIdAndUpdate(id, { idEditorial, editorial });
    res.redirect('/editorial');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.EDITORIAL.ACTUALIZAR_ERROR });
  }
};

// Eliminar editorial
module.exports.eliminar = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: MENSAJES.EDITORIAL.VALIDACION });

    await Editorial.findByIdAndRemove(id);
    res.redirect('/editorial');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.EDITORIAL.ELIMINAR_ERROR });
  }
};