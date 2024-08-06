const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const corralSchema = new mongoose.Schema({
    capacidad: { type: Number, required: true },
    cantidad_animales: { type: Number },
});

const Corral = mongoose.model("Corral", corralSchema);

module.exports = Corral;
