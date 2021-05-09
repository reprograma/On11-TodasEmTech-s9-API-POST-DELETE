const express = require("express")
const app = express()

app.use(express.json())

const index = require("./routes/index")
const contatinhos = require("./routes/contatinhosRouters")

app.use("/", index)
app.use("/contatinhos", contatinhos)

module.exports = app