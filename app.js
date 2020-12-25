const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

// IMPORT ROUTES
const mahasiswaRoute = require("./routes/mahasiswa");

// MIDDLEWARE
app.use(bodyParser.json());
app.use("/mahasiswa", mahasiswaRoute);

// INDEX ROUTE
app.get("/", (req, res) => res.send("Hallo Word!"));

// CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("connect to db")
);

// Server port
app.listen(3000);
