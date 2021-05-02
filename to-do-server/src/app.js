const express = require("express");
const app = express();

// Transforma tudo que o client manda em json (porque vem em string)
app.use(express.json());

const index = require("./routes/index");
const tarefas = require("./routes/toDoRoutes");

// Rota raiz
app.use("/", index);
app.use("/tarefas", tarefas);

module.exports = app;