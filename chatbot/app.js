const express = require("express");
const chatRoutes = require("./routes/chatRoutes");
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json()); // data will ultimately store req.body

app.use("/chat", chatRoutes);

module.exports = app;