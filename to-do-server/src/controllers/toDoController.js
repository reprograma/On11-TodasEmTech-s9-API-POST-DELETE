const tarefasJson = require("../models/tarefas.json");
const fs = require("fs");
const { response } = require("express");

const getAll = (req, resp) => {
    resp.status(200).send(tarefasJson);
}

const getById = (req, resp) => {
    const idRequirido = req.params.id;
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)

    resp.status(200).send(tarefaFiltrada);
}

const createTask = (req, resp) => {
    //req.body //request body, pois o que o usuário escreverá irá para o body
    const descricaoRequirida = req.body.descricao
    const nomeColaboradorRequirido = req.body.nomeColaborador

    console.log(descricaoRequirida)
    console.log(nomeColaboradorRequirido);

    const novaTarefa = {
            id: Math.random().toString(32).substr(2,9),
            dataInclusao: new Date(),
            concluido: false,
            descricao: descricaoRequirida,
            nomeColaborador: nomeColaboradorRequirido
    }

    tarefasJson.push(novaTarefa);

    fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson),'utf8', function(err) {
        if(err) {
            return resp.status(424).send({message: err});
        }

    });

    resp.status(200).send(novaTarefa);

}

const deleteTask = (req, resp) => {
    const idRequirido = req.params.id;
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido);
    
    const index = tarefasJson.indexOf(tarefaFiltrada);

    tarefasJson.splice(index, 1);

    fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson),'utf8', function(err) {
        if(err) {
            return resp.status(424).send({message: err});
        }

    });


    resp.status(200).json([{
        "message": "Tarefa Deletada com sucesso",
        tarefasJson
    }]);

}

module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask
}