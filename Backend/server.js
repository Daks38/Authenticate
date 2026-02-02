const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/usersRouter");
const authToken = require("./middleware/Auth");
const loginRouter = require("./routes/loginRouter");
const registerRouter = require("./routes/registerRouter");
const cors = require('cors')
const connectDB = require("./configs/db");


const app = express();
connectDB();
app.use(cors())
app.use(express.json());
const port = process.env.PORT;


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