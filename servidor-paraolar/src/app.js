const express = require("express")
const app = express()

app.use(express.json())

const index = require("./routes/index")
const tarefas = require("./routes/rotas")

app.use("/", index)
app.use("/contatos", tarefas)

module.exports = app