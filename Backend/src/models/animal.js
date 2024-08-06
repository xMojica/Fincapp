const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    raza: { type: String, required: true },
    peso: { type: Number, required: true },
    color: { type: String, required: true },
    precio_ingreso: { type: Number, required: true },
    precio_salidad: { type: Number, required: false },
    fecha_ingreso: { type: Date, required: true },
    fecha_salida: { type: Date, required: false },
    imagen: { type: String, required: false },
    corral: { type: Schema.Types.ObjectId, ref: "Corral", required: true },
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
