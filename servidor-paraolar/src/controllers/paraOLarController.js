const { response } = require("express")
const { request } = require("../app")
const contatosJson = require("../models/contatos.json")

const getAll = (request, response)=>{
    response.status(200).send(contatosJson)
}

const getById = (request,resonse)=>{
    const idRequirido = request.params.id
    const contatoFiltrado = contatosJson.find(contato=>contato.id == idRequirido)
    response.status(200).json(contatoFiltrado)
}

module.exports= {
    getAll,
    getById,
    
}