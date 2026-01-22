const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/usersRouter");
const authToken = require("./middleware/Auth");
const loginRouter = require("./routes/loginRouter");
const registerRouter = require("./routes/registerRouter");
const cors = require('cors')
require("./configs/db");


const app = express();
app.use(cors())
const port = process.env.PORT;
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Bonjour");
});

//Routes
//Register
app.use("/register", registerRouter)

//Login
app.use("/login", loginRouter)

//User
app.use("/users", authToken, router)

app.listen(port, () => {
  console.log(`Serveur lancé sur le http://localhost:${port}`);
});