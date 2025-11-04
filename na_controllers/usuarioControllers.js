const  Usuario =require ('../na_models/Usuario')
const MENSAJES = require('../util/mensajes');

module.exports.insertar = async (req, res) => {
  try {
    const { nom: nombre, email, pass: password } = req.body;

    // Validaciones básicas
    if (!nombre || !email || !password) {
      return res.status(400).json({ message: MENSAJES.USUARIO.VALIDACION });
    }

    const usuario = new Usuario({ nombre, email, password });
    await usuario.save();

    console.log('Usuario registrado:', usuario);

    res.redirect('/login'); // redirige a login después de registrar
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: MENSAJES.USUARIO.INSERTAR_ERROR });
  }
};