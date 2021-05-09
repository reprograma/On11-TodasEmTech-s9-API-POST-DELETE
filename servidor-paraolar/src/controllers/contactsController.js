const contactsJson = require('../models/contatos.json')
const fs = require("fs")

const GET_AllContacts = (req, res) => {
  { res 
    ?  res.status(200).json(contactsJson)
    :  res.status(400).json("bad request")
  }
}

const GET_ContactById = (req, res) => {
  const requestedId = req.params.id
  const contact = contactsJson.find(i => i.id === requestedId)
  { contact 
    ?  res.status(200).json(contact)
    :  res.status(400).json("Id inexistente")
  }
}

const POST_NewContact = (req, res) => {
  const userName = req.body.nome;
  const userPhone = req.body.celular;
  const userSocialNetworks = req.body.redesSociais; 

  const newContact = {
    id: Math.random().toString(32).substr(2,9),
    nome: userName,
    celular: userPhone,
    redesSociais: userSocialNetworks
  }
  contactsJson.push(newContact)

  fs.writeFile('./src/models/contatos.json', JSON.stringify(contactsJson), 'utf8', (err) => err && res.status(424).send({message: err}))
  
  res.status(200).json("Contato cadastrado com sucesso!")
}

const DELETE_ContactById = (req, res) => {
  const idToDelete = req.params.id;
  const contact = contactsJson.find(i => i.id === idToDelete)
  const index = contactsJson.indexOf(contact)

  contactsJson.splice(index, 1)

  fs.writeFile('./src/models/contatos.json', JSON.stringify(contactsJson), 'utf8', (err) => err && res.status(424).send({message: err}))

  res.status(200).json("Contato deletado com sucesso!")
}

module.exports = {
  GET_AllContacts,
  GET_ContactById,
  POST_NewContact,
  DELETE_ContactById
}