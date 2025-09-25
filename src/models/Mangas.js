import mongoose from "mongoose";
import { autorSchema } from "./Autor.js"


const MangaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preço: { type: Number },
    capitulos: { type: Number },
    autor: autorSchema

}, { versionKey: false });

const  manga = mongoose.model("mangas", MangaSchema);

export default manga;