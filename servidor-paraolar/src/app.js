const express = require("express")
const app = express()

app.use(express.json()) //transforma em json antes de executar

const index = require("./routes/index")
const contatos = require("./routes/toDoRoutes")

app.use("/", index)
app.use("/contatos", contatos)

module.exports = app