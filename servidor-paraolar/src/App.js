const express = require('express');
//const path = require('path')
const index = require('./routes')
const contatos = require('./routes/contatinhosRoutes');

const app = express();

app.use(express.json())
app.use('/', index)
app.use('/contatos', contatos)

// app.get("/add", (req, res) => {
    
//     res.sendFile(path.join(__dirname + '/index.html'))
//   })


module.exports = app;