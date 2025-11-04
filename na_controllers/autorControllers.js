const Autor = require('../na_models/Autor');
const MENSAJES = require('../util/mensajes');

// Listar autores
module.exports.listar = async (req, res) => {
    try {
        const autores = await Autor.find({});
        res.render('autor', { autores });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.AUTOR.LISTAR_ERROR });
    }
};

// Insertar nuevo autor
module.exports.insertar = async (req, res) => {
    try {
        const { aut: idAutor, nom: nombre, ape: apellido, pa: pais } = req.body;

        if (!idAutor || !nombre || !apellido || !pais) {
            return res.status(400).json({ message: MENSAJES.AUTOR.VALIDACION });
        }

        const autor = new Autor({ idAutor, nombre, apellido, pais });
        await autor.save();
        res.redirect('/autor');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.AUTOR.INSERTAR_ERROR });
    }
};

// Editar autor
module.exports.editar = async (req, res) => {
    try {
        const { e_id: id, e_aut: idAutor, e_nom: nombre, e_ape: apellido, e_pa: pais } = req.body;

        if (!id) return res.status(400).json({ message: MENSAJES.AUTOR.VALIDACION });

        await Autor.findByIdAndUpdate(id, { idAutor, nombre, apellido, pais });
        res.redirect('/autor');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.AUTOR.ACTUALIZAR_ERROR });
    }
};

// Eliminar autor
module.exports.eliminar = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) return res.status(400).json({ message: MENSAJES.AUTOR.VALIDACION });

        await Autor.findByIdAndRemove(id);
        res.redirect('/autor');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: MENSAJES.AUTOR.ELIMINAR_ERROR });
    }
};
