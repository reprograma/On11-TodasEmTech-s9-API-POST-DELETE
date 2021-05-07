const tarefasJson = require("../models/tarefas.json")
//const fs = require("fs")
const { response } = require("express")

const getAll = (request, response)=>{
    response.status(200).send(tarefasJson)
}

const getById = (request, response)=>{
    const idRequest = request.params.id
    const tarefasFilter = tarefasJson.find(tarefa => tarefa.id == idRequest)

    response.status(200).send(tarefasFilter)
}

const createTask = (request, response)=>{
    const descricaoRequirida = request.body.descricao
    const nomeColaboradorRequirido = request.body.nomeColaborador

    console.log(descricaoRequirida)
    console.log(nomeColaboradorRequirido)

    const novaTarefa = { 
    id: Math.random().toString(32).substr(2,9),
    dataInclusao: new Date (),
    concluido: false,
    descricao: descricaoRequirida,
    nomeColaborador: nomeColaboradorRequirido
}
    tarefasJson.push(novaTarefa)

    //fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson), 'utf8', function(err){
    //    if(err){
    //        return response.status(424).send({mensagem: err})
    //
    //    }
    //})

    response.status(200).send(novaTarefa)
}

const deleteTask = (request, response)=>{
    const idRequest = request.params.id
    const tarefasFilter = tarefasJson.find(tarefa => tarefa.id == idRequest)

    const indice = tarefasJson.indexOf(tarefasFilter)

    tarefasJson.splice(indice, 1)

    response.status(200).send([{
        "mensagem":"Tarefa deletada com sucesso.",
        tarefasJson
    }])

}

module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask  
}