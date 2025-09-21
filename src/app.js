import express from "express";

const app = express();

//middleware
// conversão parsiamento para json
app.use(express.json());


// simulação de dados
const manga = [
    {
        "id": 1,
        "titulo": "One Piece"
    },
    {
        "id": 2,
        "titulo": "jujustsu-kaisen"
    }
]

function buscaLivro(id) {
    return manga.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get("/", (req,res) => {
    res.status(200).send("Node.js bem vindo");

});

app.get("/manga", (req, res) => {
    res.status(200).json(manga);
});

app.get("/manga/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(manga[index]);
})

app.post("/manga", (req, res) => {
    manga.push(req.body);
    res.status(201).send("Manga cadastrado com sucesso")
});

app.put("/manga/:id", (req,res) => {
    const index = buscaLivro(req.params.id)
    manga[index].titulo = req.body.titulo
    res.status(200).json(manga[index]);
})

app.delete("/manga/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    manga.splice(index, 1);
    res.status(200).send("manga deletado")
})


export default app;