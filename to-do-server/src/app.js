const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())

const index = require('./routes/index')
const tarefas = require('./routes/toDoRoutes')

app.use('/', index)
app.use('/tarefas', tarefas)

module.exports = app