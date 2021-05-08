const tarefaJson = require("../models/tarefas.json")
const fs = require('fs')


const getAll = (request, response)=>{
    response.status(200).json(tarefaJson)
}

const getById = (request, response)=>{
    const idRequerido = request.params.id 

    const tarefaFiltrada = tarefaJson.find(tarefa=>tarefa.id == idRequerido)

    response.status(200).json(tarefaFiltrada)
}

const createTask = (request, response)=>{
    const descricaoRequirida = request.body.descricao

    const nomeColaboradorRequerido = request.body.nomeColaborador

    console.log(descricaoRequirida)
    console.log(nomeColaboradorRequerido)

    const novaTarefa = {
        id: Math.random().toString(32).substr(2,9),
      dataInclusao: new Date(),
      concluido: false,
      descricao: descricaoRequirida,
      nomeColaborador: nomeColaboradorRequerido
    }
    tarefaJson.push(novaTarefa)

    fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefaJson), 'utf8', function(err){
        if(err){
            return response.status(424).send({message: err})
        }
    })

    response.status(200).json(novaTarefa)
}

const deleteTask = (request, response)=>{
    const idRequerido = request.params.id

    const tarefaFiltrada = tarefaJson.find(tarefa=>tarefa.id == idRequerido)

    const indice = tarefaJson.indexOf(tarefaFiltrada)
    tarefaJson.splice(indice,1)
   
    fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefaJson), 'utf8', function(err){
        if(err){
            return response.status(424).send({message: err})
        }
    })

    response.status(200).json([{
        "mensagem":"tarefa deletada com sucesso",
        tarefaFiltrada
    }])
}

module.exports ={
    getAll,
    getById, 
    createTask,
    deleteTask
}