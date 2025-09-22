import mongoose from "mongoose";


const MangaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    capitulos: { type: Number }

}, { versionKey: false });

const manga = mongoose.model("mangas", MangaSchema);

export default manga;