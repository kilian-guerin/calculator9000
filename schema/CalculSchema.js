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

function newCalcul(data) {
  const newCalcul = new Calculs({
    calcul: data.calcul,
    result: data.total,
  });

  newCalcul
    .save()
    .then(() => {
      console.log("new calcul saved");
    })
    .catch((err) => console.log(err));
}

module.exports = { Calculs, newCalcul };