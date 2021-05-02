const tarefasJson = require("../models/tarefas.json");
const fs = require("fs") // já faz parte do node

// Retorna todas as tarefas
const getAll = (request, response)=>{
    response.status(200).send(tarefasJson);
}

// Retorna uma tarefa por id
const getById = (request, response)=>{
    const idRequerido = request.params.id;
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido);

    response.status(200).send(tarefaFiltrada);
}

// Cria uma tarefa
const createTask = (request, response)=>{
    // Pegar o id
    const descricaoRequerida = request.body.descricao
    const nomeColaboradorRequerido = request.body.nomeColaborador

    // console.log(descricaoRequerida)
    // console.log(nomeColaboradorRequerido);

    // Montar o objeto antes de montar o banco de dados
    const novaTarefa = {
        id: Math.random().toString(32).substr(2,9), // id automático com letras e números
        dataInclusao: new Date(), // "19/10/2020" - em string
        concluido: false,
        descricao: descricaoRequerida,
        nomeColaborador: nomeColaboradorRequerido
    }

    // dá um push na novatarefa
    tarefasJson.push(novaTarefa)

    // reescrevendo no arquivo
    fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson), "utf8", function(err){
        if (err) {
            return response.status(424).send({
                message: err
            })
        }
    })

    response.status(200).send(novaTarefa);
}

const deleteTask = (request, response)=>{
    const idRequerido = request.params.id;
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido);
    
    const indice = tarefasJson.indexOf(tarefaFiltrada);
    tarefasJson.splice(indice, 1);

    response.status(200).json({
        "mensagem":"Tarefa deletada com sucesso",
        tarefasJson
    });

}

module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask
}