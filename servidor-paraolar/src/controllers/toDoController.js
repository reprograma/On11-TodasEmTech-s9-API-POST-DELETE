const contatosJson = require("../models/contatos.json")
const fs = require("fs")

const getAll = (request, response) => {
    response.status(200).send(contatosJson)
}

const getById = (request, response) => {
    const idRequirido = request.params.id
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequirido)

    response.status(200).send(contatoFiltrado)
}

const createContato = (request, response) => {
    const nomeRequirido = request.body.nome
    const celularRequirido = request.body.celular
    const redesSociaisRequirido = request.body.redesSociais

    const novoContato = {
        id: Math.random().toString(32).substr(2, 9),
        nome: nomeRequirido,
        celular: celularRequirido,
        redesSociais: redesSociaisRequirido
    }

    contatosJson.push(novoContato)

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), 'utf8', function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).send(novoContato)

}

const deleteContato = (request, response) => {
    const idRequirido = request.params.id
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequirido)

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
    createContato,
    deleteContato
}