const { response, request } = require("express")
const contatos = require("../models/contatos.json")

const getAll = (request, response)=>{
    response.status(200).send(contatos)
}

const getById = (request, response)=>{
    const idRequerido = request.params.id
    const contatoFiltrado = contatos.find(contato => contato.id == idRequerido)

    response.status(200).send(contatoFiltrado)
}

const createTask = (request, response)=>{
    const descricaoRequirida = request.body.descricao 
    const nomeDoColaboradorRequerido = request.body.nomeColaborador

    const novoContato = {
        id: Math.random().toString(32).substr(2,9),
        dataInclusao: new Date(),
        concluido: false,
        descricao: descricaoRequirida,
        nomeColaborador: nomeDoColaboradorRequerido
    }

    contatos.push(novoContato)

    response.status(200).send(novoContato)
}

const deleteTask = (request, response)=>{
    const idRequerido = request.params.id
    const contatoFiltrado = contatos.find(contato => contato.id == idRequerido)

    const indice = contatos.indexOf(contatoFiltrado)
    contatos.splice(indice, 1)

    response.status(200).send([{
        "mensagem":"Contato deletado com sucesso!",
        contatos
    }])
    
}

module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask
}
