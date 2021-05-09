
const contatosJson = require("../models/contatos.json")
const fs = require("fs")

const getAll = (request, response) => {
    response.status(200).send(contatosJson)
}

const getById = (request, response) => {
    const idRequerido = request.params.id
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequerido)

    if(contatoFiltrado == undefined || idRequerido == " "){
        response.status(404).json([{
            "mensagem":"Favor, informar um id válido"
        }])
    }else{
        response.status(200).json(contatoFiltrado)       
    }  
}

const deleteTask = (request, response) => {
    const idRequerido = request.params.id
    const contatoFiltrada = contatosJson.find(contato => contato.id == idRequerido)

    if(contatoFiltrada == undefined || idRequerido == " "){
       return response.status(404).json([{
            "mensagem":"Por favor, informar um id válido"
        }])
    }

    const indice = contatosJson.indexOf(contatoFiltrada)
    contatosJson.splice(indice, 1)

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), 'utf8', function(err) {
        if(err){
            return response.status(424).send({message:err})
        }
    })

    response.status(204).json({
        "mensagem": "Contato deletado",
        contatosJson
    })
}

const createTask = (request, response) => {
    const nomeContato = request.body.nome
    const celularContato = request.body.celular
    const redesSociaisDoContato = request.body.redesSociais

    if(!nomeContato || !celularContato || !redesSociaisDoContato || nomeContato == "" || celularContato == "" || redesSociaisDoContato == ""){
        response.status(400).json({
            "mensagem": "Preencha os campos novamente"
        })
    }

    const novoContato = {
        id: Math.random().toString(32).substr(2,9),
        nome: nomeContato ,
        celular:celularContato,
        redesSociais: redesSociaisDoContato
    } 
    contatosJson.push(novoContato)

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), 'utf8', function(err){
        if(err){
            return response.status(424).send({message:err})
        }
    })

    response.status(200).send(novoContato)
}

module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask
}