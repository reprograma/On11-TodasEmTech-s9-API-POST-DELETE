const contatosJson = require("../models/contatos.json")
const fs = require("fs")
const { response } = require("express")

const getAll = (request, response)=>{
    response.status(200).send(contatosJson)
}

const getById = (request, response)=>{
    const idRequest = request.params.id
    const contatosFilter = contatosJson.find(contato => contato.id == idRequest)

    response.status(200).send(contatosFilter)
}

const createTask = (request, response)=>{
    const contatoNome = request.body.nome
    const contatoCelular = request.body.celular
    const contatoRedeSocial = request.body.redeSocial

    console.log(contatoNome)

    const novoContato = { 
    id: Math.random().toString(32).substr(2,9),
    nome: contatoNome,
    celular: contatoCelular,
    redesSociais: contatoRedeSocial
}

    contatosJson.push(novoContato)

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), 'utf8', function(err){
        if(err){
            return response.status(424).send({mensagem: err})

        }
    })

    response.status(200).send(novoContato)
}

const deleteContato = (request, response)=>{
    const idRequest = request.params.id
    const contatosFiltrados = contatosJson.find(contato => contato.id == idRequest)

    const index = contatosJson.indexOf(contatosFiltrados)

    contatosJson.splice(index, 1)

    response.status(200).send([{
        "mensagem":"Contato Deletado.",
        contatosJson
    }])

}

module.exports = {
    getAll,
    getById,
    createTask,
    deleteContato
}