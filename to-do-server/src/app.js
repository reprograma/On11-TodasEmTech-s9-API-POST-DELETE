const express = require("express")
const app = express()

app.use(express.json()) // tranformando os dados de texto para JSON (POST)

const index = require("./routes/index")
const tarefas = require("./routes/toDoRoutes")

app.use("/", index)
app.use("/tarefas", tarefas)

module.exports = app