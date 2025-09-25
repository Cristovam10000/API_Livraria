import autor from "../models/Autor.js";

class AutorController {

    static async listarAutor(req, res) {
        try {
            const listarAutor = await autor.find({});
            res.status(200).json(listarAutor)

        }catch (erro) {
            res.status(500).json({ message: `${erro.message}` })
        }
    }

    static async listarAutorPorId(req,res) {
        try{
            const id = req.params.id
            const autorEncontrado = await autor.findById(id)
            res.status(200).json(autorEncontrado)
        }catch (erro) {
            res.status(500).json({ message: `${erro.message}` })
        }
    }

    static async cadastrarAutor(req, res) {
        try{
            const novoautor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", autor: novoautor });

        }catch (erro) {
            res.status(500).json({ message: `${erro.message}` })
        }
    }

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id
            const autordeletado = await autor.findByIdAndDelete(id)
            res.status(200).json({ message: "autor excluido com sucesso", autor: autordeletado })

        } catch (erro) {
            res.status(500).json({ message: `${erro.message}` })
        }
    }

    static async atualizarAutor(req, res) {
        try{
            const id = req.params.id;
            const autorAtualizado = await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "autor atuaizado com sucesso", autor: autorAtualizado })
             
        }catch (erro) {
            res.status(500).json({ message: `${erro.message}` })
        } 
    }
           
}

export default AutorController;