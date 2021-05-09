//const { response } = require("express")
//const { request } = require("../app")
const contatosJson = require("../models/contatos.json")

const fs = require("fs")
const { response } = require("express")

const getAll = (request, response)=>{
    response.status(200).send(contatosJson)
}

const getById = (request,response)=>{
    const idRequirido = request.params.id
    const contatoFiltrado = contatosJson.find(contato=>contato.id == idRequirido)
    response.status(200).json(contatoFiltrado)
}

const createTask = (request, response) =>{
    const nomeRequerido = request.body.nome
    const celularRequerido = request.body.celular
    const redesSociaisRequerida = request.body.redesSociais

    console.log(nomeRequerido)
    console.log(celularRequerido)
    console.log(redesSociaisRequerida)


    const novoContato ={
        id: Math.random().toString(32).substr(2,9),
        nome: nomeRequerido,
        celular: celularRequerido,
        redesSociais: redesSociaisRequerida
    }

    contatosJson.push(novoContato)

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), 'utf8', function(err){
        if(err){
            return response.status(424).send({message: err})
        }
    })

    response.status(200).json(novoContato)

}

const deleteTask = (request,response)=>{
    const idRequirido = request.params.id
    const contatoFiltrado = contatosJson.find(contato =>contato.id == idRequirido)

    const indice = contatosJson.indexOf(contatoFiltrado)
    contatosJson.splice(indice, 1)

    response.status(200).json([{
        "mensagem": "Contato deletado",
        contatosJson
    }])

}

module.exports= {
    getAll,
    getById,
    createTask,
    deleteTask,



}