const contatosJson = require("../models/contatos.json")

const getAll = (request, response) => {
    response.status(200).send(contatosJson)
}

const getById = (request, response) => {
    const idRequerido = request.params.id
    const contatoFiltrado = contatosJson.find(contatos => contatos.id == idRequerido)

    response.status(200).send(contatoFiltrado)
}

const createContact = (request, response) => {
    const nomeRequerido = request.body.nome
    const celularRequerido = request.body.celular
    const redeSocialRequerida = request.body.redesSociais

    console.log(nomeRequerido)
    console, log(celularRequerido)
    console.log(redeSocialRequerida)
}

module.exports = {
    getAll,
    getById,
    createContact
}