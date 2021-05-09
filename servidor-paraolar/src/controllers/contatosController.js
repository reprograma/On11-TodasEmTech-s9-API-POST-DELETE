const contatosJson = require("../models/contatos.json")

const getAll = (request, response) => {
    response.status(200).send(contatosJson)
}

const getById = (request, response) => {
    const idRequerido = request.params.id
    const contatoFiltrado = contatosJson.find(contatos => contatos.id == idRequerido)

    response.status(200).send(contatoFiltrado)
}



module.exports = {
    getAll,
    getById
} 