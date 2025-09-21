import http from "http";

const PORT = 3000;

const rotas = {
    "/": "Curso de Node.js express",
    "/livros": "vc está na rota livros",
    "/autores": "vc entrou na rota com informações dos autores"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("servidor escutando!");
});











