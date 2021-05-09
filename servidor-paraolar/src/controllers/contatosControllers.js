const contatosJson = require("../models/contatos.json")
const fs = require("fs")

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

    const novoContato = {
        id: Math.random().toString(32).substr(2, 9),
        nome: nomeRequerido,
        celular: celularRequerido,
        redesSociais: redeSocialRequerida
    }
    contatosJson.push(novoContato)

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), 'utf8', function(err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).send(novoContato)

}

const deleteContact = (request, response) => {
    const idRequerido = request.params.id
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequerido)

    const indice = contatosJson.indexOf(contatoFiltrado)
    contatosJson.splice(indice, 1)

    response.status(200).json([{
        "mensagem": "Contato deletado com sucesso",
        contatosJson
    }])
}


module.exports = {
    getAll,
    getById,
    createContact,
    deleteContact
}