const express = require("express")
const app = express()

app.use(express.json())//transforma tudo que o meu client manda no create(body vem sempre em texto) em Json

const index = require("./routes/index")
const tarefas = require("./routes/toDoRoutes")

app.use("/", index)
app.use("/tarefas", tarefas)



module.exports = app