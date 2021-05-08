const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

const index = require("./routes/index")
const tarefas = require("./routes/toDoRouts")

app.use("/", index)
app.use("/tarefas", tarefas)

module.exports = app