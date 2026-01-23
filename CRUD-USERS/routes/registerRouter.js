const express = require("express")
const User = require("../models/userRegister")
const bcrypt  = require("bcryptjs");
// const jwt = require("json-web-token");
// const jwt = require("jsonwebtoken");

const router = express.Router()



router.post("/", async (req, res) => {
  try {
    const { username, email, number, name, password } = req.body;
    const verifEmail = await User.findOne({ email });
    const verifUsername = await User.findOne({ username });
    if (verifEmail) {
      return res.status(400).json({ msg: "Email existe déjà" });
    } else if (verifUsername) {
      return res.status(400).json({ msg: "Username déjà utilisé" });
    } else if (!name) {
      return res.status(400).json({ msg: "Le champs nom est requis" });
    } else if (!username) {
      return res
        .status(400)
        .json({ msg: "Le champs nom d'utilisateur est requis" });
    } else if (!email) {
      return res.status(400).json({ msg: "Le champs email est requis" });
    } else if (!number) {
      return res
        .status(400)
        .json({ msg: "Le champs numéro de téléphone est requis" });
    } else if (!password) {
      return res.status(400).json({ msg: "Le champs mot de passe est requis" });
    } else {
      const salt = bcrypt.genSaltSync(10)
      const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        number: parseInt(req.body.number),
        password: bcrypt.hashSync(req.body.password, salt),
        isAdmin: req.body.isAdmin,
      });
      const saved = await newUser.save();
      const  userInfos = {
      id: saved.id,
      isAdmin: saved.isAdmin,
      name: saved.name,
      username: saved.username,
      email: saved.email
     }
      res.json({ user: userInfos, msg: "Inscription réussie" });
    }
  } catch (err) {
    res.json(err.message);
  }
});





module.exports = router
