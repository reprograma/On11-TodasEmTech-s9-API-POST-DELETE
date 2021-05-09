const contatos = require("../models/contatos.json")
const fs = require ("fs")
const { request, response } = require("express")

const getAll = (request, response)=>{
    response.status(200).send(contatos)
}
const getById = (request, response)=>{
    const idRequerido = request.params.id
    const contatoFiltrado = contatos.find(contato=> contato.id == idRequerido)
    response.status(200).send(contatoFiltrado)  
}

const creatContato = (request, response)=>{
    
    const descricaoRequerida = request.body.descricao
    const nomeContatoRequerido = request.body.nomeContato


    const novoContato = {
    id: Math.random().toString(32).substr(2,9),
    dataInclusao: new Date(),
    concluido: false,
    descricao: descricaoRequerida,
    nomeContato: nomeContatoRequerido
    }

    contatos.push(novoContato)

    fs.writeFile ("./src/models/contatos.json", JSON.stringify(contatos), "utf8", function(err){
        if(err){
            return response.status(424).send({message: err})
        }
    })

    response.status(200).send(novoContato)
}


const deleteContato= (request, response)=>{
    const idRequerido= request.params.id
    const contatoFiltrado = contatos.find(contato=> contato.id == idRequerido)

    const indice = contatos.indexOf(contatoFiltrado)
    contatos.splice(indice, 1)

    response.status(200).json([{
        "mensagem": "O contatinho já era", contatos
    }])
}

module.exports={
    getAll,
    getById,
    creatContato,
    deleteContato
}


