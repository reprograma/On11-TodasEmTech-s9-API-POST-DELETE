const contatos = require("../models/contatos.json");
const fs = require("fs");

const getAll = (req, res) => {
  res.status(200).json(contatos);
};

const getById = (req, res) => {
  const id = req.params.id;
  const contatoFiltrado = contatos.find(contato => contato.id == id);

  res.status(200).send(contatoFiltrado);
}

module.exports = {
  getAll,
  getById
}