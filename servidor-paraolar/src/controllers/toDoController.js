const cadastroJson = require("../models/contatos.json")
//const fs = require("fs")

const getAll = (request, response) =>{
    response.status(200).send(cadastroJson)
}

const getById = (request, response) =>{
    const idRequerido = request.params.id
    const cadastroFiltrado = cadastroJson.find(contato => contato.id == idRequerido)


    response.status(200).send(cadastroFiltrado)

}

const createTask = (request, response) =>{
    const nomeRequerido = request.body.nome

    const celularRequeirido = request.body.celular
    const redeRequerida = request.body.redesSociais


        console.log(celularRequeirido)
        console.log(nomeRequerido)
        console.log(redeRequerida)

    const novoContato ={
        id: Math.random().toString(32).substring(2,9),
        nome: nomeRequerido,
        celular: celularRequeirido,
        redesSociais: redeRequerida


    }

    cadastroJson.push(novoContato)



    response.status(200).send(novoContato)


}

const deleteTask = (request, response) =>{
    const idRequerido = request.params.id
    const tarefaFiltrada = cadastroJson.find(contato => contato.id == idRequerido)
    const indice = cadastroJson.indexOf(tarefaFiltrada)
    cadastroJson.splice(indice, 1)
    response.status(200).json([{
        "menssagem": "Contato deletado com sucesso",
        cadastroJson
    }])
}

module.exports ={
    getAll,
    getById,
    createTask,
    deleteTask
} 