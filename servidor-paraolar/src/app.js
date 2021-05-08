const express = require("express")// call express
const app = express()//run express

const cors = require("cors")//call cors in case of erros due to different servers

app.use(cors())//solve the problem with servers
app.use(express.json())// [body] string --> json

const index = require("./routes/index")//call index
app.use("/", index)//use index

const contatos = require("./routes/paraolarRoute")//call contatos
app.use("/contatos", contatos)//use contatos


module.exports = app