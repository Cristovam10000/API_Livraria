import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import manga from "./models/Mangas.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).send("Node.js bem vindo");

});

app.get("/mangas", async (req, res) => {
    const listaMangas = await manga.find({});
    res.status(200).json(listaMangas);
});




app.get("/mangas/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(manga[index]);
})

app.post("/mangas", (req, res) => {
    manga.push(req.body);
    res.status(201).send("Manga cadastrado com sucesso")
});

app.put("/mangas/:id", (req,res) => {
    const index = buscaLivro(req.params.id)
    manga[index].titulo = req.body.titulo
    res.status(200).json(manga[index]);
})

app.delete("/mangas/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    manga.splice(index, 1);
    res.status(200).send("manga deletado")
})


export default app;