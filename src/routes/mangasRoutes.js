import express from "express";

import MangaController from "../controllers/mangaController.js";

const routes = express.Router();

routes.get("/mangas", MangaController.listarMangas);
routes.get("/mangas/busca",MangaController.listaMangasPorEditora);
routes.get("/mangas/:id", MangaController.listaMangaPorId);
routes.post("/mangas", MangaController.cadastrarManga);
routes.put("/mangas/:id", MangaController.atualizarManga);
routes.delete("/mangas/:id",MangaController.deletarManga );




export default routes;