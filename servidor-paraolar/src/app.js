const express = require("express")
const app = express()

app.use(express.json())

const contatos = require("./Routes/contatoRoute")

app.use("/", contatos)

module.exports = app