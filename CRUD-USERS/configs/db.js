const mongoose = require('mongoose')
require("dotenv").config();

//Connexion DB
const db = mongoose
  .connect(process.env.URI)
  .then(() => console.log("DB est en fonction!"))
  .catch((err) => console.error("Erreur", err));

  module.exports = db;