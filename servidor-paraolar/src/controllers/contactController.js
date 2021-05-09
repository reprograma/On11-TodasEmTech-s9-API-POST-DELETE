const contatos = require("../models/contatos.json");
const fs = require("fs");

const getAll = (req, res) => {
  res.status(200).send(contatos);
};

const getById = (req, res) => {
  const id = req.params.id;
  const contatoFiltrado = contatos.find(contato => contato.id == id);

  res.status(200).send(contatoFiltrado);
};

const createContact = (req, res) => {
    const nome = req.body.nome;
    const celular = req.body.celular;
    const redeSocial = req.body.redeSocial;

    console.log(nome);

    const novoContato = {
      //gerando id randômico com math.random, mudando pra string com toString e colocando a partir de qual número eu desejo que comece o id e o tamanho do id
      id: Math.random().toString(32).substr(2,9),
      nome: nome,
      celular: celular,
      redeSociaL: redeSocial
    }

      contatos.push(novoContato);

    //reescrevendo o arquivo contatos.json (para incluir novos dados)
      fs.writeFile("./src/models/contatos.json", JSON.stringify(contatos), 'utf-8', function(err){
        if(err){
          return res.status(424).send({ message: err})
        }
      });

    res.status(200).send(novoContato);
}

const deleteContact = (req, res) => {
  const id = req.params.id;
  const contato = contatos.find(contato => contato.id == id);

  res.status(200).send()
}

module.exports = {
  getAll,
  getById, 
  createContact
}