const tarefasJson = require("../models/tarefas.json")
const fs = require("fs")

const getAll = (request, response) => {
    response.status(200).send(tarefasJson)
}

const getById = (request, response) => {
    const idRequerido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido)

    response.status(200).send(tarefaFiltrada)
}

const createTask = (request, response) => {
    const descricaoRequirido = request.body.descricao
    const nomeColaboradorRequerido = request.body.nomeColaborador

    console.log(descricaoRequirido)
    console.log(nomeColaboradorRequerido)

    const novaTarefa = {
        id: Math.random().toString(32).substr(2, 9),
        dataInclusao: new Date(),
        concluido: false,
        descricao: descricaoRequirido,
        nomeColaborador: nomeColaboradorRequerido
    }
    tarefas.push(novaTarefa)

    // fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson), 'utf8',
    //function(err) {
    //if (err) {
    //return response.status(424).send({ message: err })
    //}
    //})

    response.status(200).send(novaTarefa)
}

const deleteTask = (request, response) => {
    const idRequerido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido)

    const indice = tarefasJson.indexOf(tarefaFiltrado)
    tarefasJson.splice(indice, 1)

    response.status(200).json([{
        "mensagem": "Tarefa deletada com sucesso",
        tarefasJson
    }])
}

module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask
}