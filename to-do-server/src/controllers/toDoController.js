const tarefasJson = require("../models/tarefas.json")
const fs = require ("fs")
const { request, response } = require("express")

const getAll = (request, response)=>{
    response.status(200).send(tarefasJson)
}

const getById = (request, response)=>{
    const idRequerido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa=> tarefa.id == idRequerido)
    response.status(200).send(tarefaFiltrada)  
}

const creatTask = (request, response)=>{
    
    const descricaoRequerida = request.body.descricao
    const nomeColaboradorRequerido = request.body.nomeColaborador


    const novaTarefa = {
    id: Math.random().toString(32).substr(2,9),
    dataInclusao: new Date(),
    concluido: false,
    descricao: descricaoRequerida,
    nomeColaborador: nomeColaboradorRequerido
    }

    tarefasJson.push(novaTarefa)

    fs.writeFile ("./src/models/tarefas.json", JSON.stringify(tarefasJson), "utf8", function(err){
        if(err){
            return response.status(424).send({message: err})
        }
    })

    response.status(200).send(novaTarefa)
}

const deleteTask = (request, response)=>{
    const idRequerido= request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa=> tarefa.id == idRequerido)

    const indice = tarefasJson.indexOf(tarefaFiltrada)
    tarefasJson.splice(indice, 1)

    response.status(200).json([{
        "mensagem": "Tarefa deletada com sucesso",
        tarefasJson
    }])
}

module.exports={
    getAll,
    getById,
    creatTask,
    deleteTask
}
