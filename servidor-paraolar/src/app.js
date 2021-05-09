const express = require("express")
const app = express()

app.use(express.json()) //transforma a string de entrada em json

const index = require("./routes/index")
const contatos = require("./routes/routes")

app.use("/", index)
app.use("/contatos", contatos)

module.exports = app