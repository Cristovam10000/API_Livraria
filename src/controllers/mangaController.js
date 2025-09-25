import manga from "../models/Mangas.js";

class MangaController {

    static async listarMangas(req, res) {
        try {
            const listaMangas = await manga.find({})
            res.status(200).json(listaMangas)

        } catch (erro) {
            res.status(500).json({ message: `${erro.message}` })
        }
        
    }

    static async listaMangaPorId(req, res) {
        try {
            const id = req.params.id
            const mangaEncontrado = await manga.findById(id);
            res.status(200).json(mangaEncontrado)

        }catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do manga` })
        }
        
    }

    static async cadastrarManga(req,res) {
        try {
            const novoManga = await manga.create(req.body)
            res.status(201).json({ message: "Criado com sucesso", manga: novoManga })
         }catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastra livro` })
        }
        
    }

    static async atualizarManga(req, res) {
        try {
            const id = req.params.id
            const mangaAtualizado = await manga.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizaso", manga: mangaAtualizado});

        }catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` })
        }
    }

    static async deletarManga(req, res) {
        try {
            const id = req.params.id
            const mangadeletado = await manga.findByIdAndDelete(id)
            const listamanga = await manga.find({})
            res.status(200).json({ message: "Livro excluido com sucesso", resultado: listamanga})
            

        }catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` })
        }
    }

};

export default MangaController;