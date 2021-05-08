const express = require('express');
const index = require('./routes')
const contatos = require('./routes/contatosRoutes');

const app = express();

app.use(express.json())
app.use('/', index)
app.use('/contatos', contatos)

module.exports = app; 