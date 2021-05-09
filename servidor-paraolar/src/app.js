const express = require("express");
const app = express();


app.use(express.json())

const index = require("./routes/index");
const contatos = require("./routes/contatosRoutes");

app.use("/", index);
app.use("/contatos", contatos)



module.exports= app