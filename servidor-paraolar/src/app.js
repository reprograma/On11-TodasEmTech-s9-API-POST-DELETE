const express = require("express");
const app = express();

const index = require("./routes/index");
const contatos = require("./routes/contatosRoutes")

//app.use(express.json());

// Rota raiz
app.use("/", index);
app.use("/contatos", contatos);

module.exports = app;