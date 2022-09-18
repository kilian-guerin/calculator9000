const mongoose = require("mongoose");
const CalculSchema = new mongoose.Schema({
  calcul: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
});

const Calculs = mongoose.model("Calculs", CalculSchema);

module.exports = { Calculs };