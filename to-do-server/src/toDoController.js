const tarefasJson = require("../models/tarefas.json")
const fs = require("fs")


const getAll = (request, response)=>{
    response.status(200).send(tarefasJson)
}
const getById = (request, response)=>{
    const idRequirido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)

    response.status(200).send(tarefaFiltrada)
}

const createTask = (request, response) => {
    const descricaoRequirida = request.body.descricao
    const nomeColaboradorRequirido = request.body.nomeColaborador

    console.log(descricaoRequirida)
    console.log(nomeColaboradorRequirido)

    const novaTarefa ={
        id: Math.random().toString(32).substr(2,9), //Pois são 32 caracteres, duas posição e com tamanho de 9,
        dataInclusao: new Date(),//criar a data, uma função utilizada
        concluido: false,
        descricao: descricaoRequirida,
        nomeColaborador: nomeColaboradorRequirido
    }

    tarefasJson.push(novaTarefa)

    // fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson), "utf8", function (err){
    //     if (err){
    //         return response.status(424).send({message: err})
    // }
    // })

    response.status(200).send(novaTarefa)
}

const deleteTask = (resquest, response)=>{
    const idRequirido = request.params.idc
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)
    const indice = tarefaJson.IndexOf(tarefa)

    tarefasJson.splice(indice,1)
    //se quiser mudar.
    // fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson), "utf8", function (err){
    //     if (err){
    //         return response.status(424).send({message: err})
    // }
    // })


    response.status(200).json([{
        "mensagem" : "Tarefa deletada com sucesso",
        tarefasJson

    }])
}
module.exports ={
    getAll,
    getById,
    createTask,
    deleteTask
}