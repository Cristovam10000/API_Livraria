import express from "express";
import routesMangas from "./mangasRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"))

    app.use(express.json(), routesMangas)
}

export default routes; 