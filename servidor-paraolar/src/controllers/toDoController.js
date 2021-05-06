const contatosJson = require("../models/contatos.json")
const fs = require("fs")
const { request } = require("http")

const getAll = (request, response)=>{
    response.status(200).json(contatosJson)
}

const getById = (request, response)=>{
    const idRequerido = request.params.id
    const contatoFiltrado = contatosJson.find(tarefa => tarefa.id == idRequerido)
    
    if(!contatoFiltrado){
        return response.status(204).json();
    } else{

        response.status(200).send(contatoFiltrado)
    }
}

const createContact = (request, response)=>{
    const nomeContato = request.body.nome
    const celularContato = request.body.celular
    const redesSociaisNew = request.body.redesSociais

    const novoContato ={
        id: Math.random().toString(32).substr(2,9),
        nome: nomeContato,
        celular: celularContato,
        redesSociais: redesSociaisNew
    }

    contatosJson.push(novoContato)

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), 'utf8', function(err){
        if(err) {
            return response.status(424).send({message: err})
        }
    })

    response.status(200).send(novoContato)
}

const deleteContact = (request, response)=>{
    const idRequerido = request.params.id
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequerido)

    const indice = contatosJson.indexOf(contatoFiltrado)
    const {nome} = contatoFiltrado
    contatosJson.splice(indice, 1)
    
    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), 'utf8', function(err){
        if(err) {
            return response.status(424).send({message: err})
        }
    })

    response.status(200).json([{
        "mensagem":`Contato: ${nome} deletado com sucesso!`,
        contatosJson
    }])
}

module.exports = {
    getAll,
    getById,
    createContact,
    deleteContact
}