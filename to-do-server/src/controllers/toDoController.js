const tarefasJson = require("../models/tarefas.json")
const fs = require("fs")

const getAll = (request, response) => {
    response.status(200).send(tarefasJson)
}

const getById =(request, response) => {
    const idRequerido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido)
    response.status(200).send(tarefaFiltrada)
}

// função para definir o formato da data dia/mes/ano
function dataAtualFormatada(){
    var data = new Date()
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes  = (data.getMonth()+1).toString(),
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear()
        
        return diaF+"/"+mesF+"/"+anoF
}

const createTask = (request, response) => {
    const descricaoRequirida = request.body.descricao
    const nomeColaboradoRequirido = request.body.nomeColaborador

    const novaTarefa = {
      id: Math.random().toString(32).substr(2,9),
      dataInclusao: dataAtualFormatada(), // função data formatada ante astava apenas new Date()
      concluido: false,
      descricao: descricaoRequirida,
      nomeColaborador: nomeColaboradoRequirido
    }
    tarefasJson.push(novaTarefa)

    fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson), 'utf8', function(err) {
        if(err){
            return response.status(424).send({message:err})
        }
    })

    response.status(200).send(novaTarefa)
}

const deleteTask = (request, response) => {
    const idRequirido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)
    
    const indice = tarefasJson.indexOf(tarefaFiltrada)
    tarefasJson.splice(indice, 1)

    fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson), 'utf8', function(err) {
        if(err){
            return response.status(424).send({message:err})
        }
    })

    response.status(200).json({
        "mensagem": "Tarefa Deletada com Sucesso",
        tarefasJson
    })
}

module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask
}