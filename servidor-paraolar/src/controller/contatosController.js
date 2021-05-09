const contatosJson = require("../models/contatos.json")
const fs = require("fs")

const getByAll = (request, response) => {
    response.status(200).send(contatosJson)
}

const getById = (request, response) => {
    const idRequerido = request.params.id
    const contatoLocalizado = contatosJson.find(contato => contato.id == idRequerido)
    if (contatoLocalizado == undefined) {
        response.status(404).json({
            "mensagem": "id não encontrado"
        })
    }
    else {
        response.status(200).send(contatoLocalizado)
    }
}

const createTask = (request, response) => {
    const nomeContato = request.body.nome
    const celularContato = request.body.celular
    const redesContato = request.body.redesSociais

    const novoContato = {
        id: Math.random().toString(16).substr(2, 9),
        nome: nomeContato,
        celular: celularContato,
        redesSociais: redesContato
    }

    contatosJson.push(novoContato)
    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), "utf8", function (err) {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).json(novoContato)
}

const deleteTask = (request, response) => {
    const idRequerido = request.params.id
    const contatoLocalizado = contatosJson.find(contatos => contatos.id == idRequerido)

    if (contatoLocalizado == undefined) {
        response.status(404).json({
            "mensagem": "id não encontrado"
        })
    }

    else {
        const indiceContatoLocalizado = contatosJson.indexOf(contatoLocalizado)
        response.status(200).send({
            "mensagem": "a tarefa abaixo foi deletada com sucesso",
            contatoLocalizado,
        })

        contatosJson.splice(indiceContatoLocalizado, 1)

        fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), "utf8", function (err) {
            if (err) {
                return response.status(424).send({ message: err })
            }
        })
    }
}

module.exports = {
    getByAll,
    getById,
    createTask,
    deleteTask
}