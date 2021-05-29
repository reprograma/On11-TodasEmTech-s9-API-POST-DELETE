const tarefasJson = require("../models/tarefas.json")
const fs = require("fs")

const getAll = (request, response)=>{
    response.status(200).json(tarefasJson)
}

const getById = (request, response) =>{
    
    const idRequerido = request.params.id//id que ja esta na rota, e nao id requerido que é o nome da constante
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido )//fazer um find pra ver se o idRequerido é o mesmo que o id do parametro
    response.status(200).json(tarefaFiltrada)
}

const createTask = (request, response) =>{ // na criação de um cadastro, ele precisa enviar duas coisas: UM BODY COM REQUISIÇÃO
    const descricaoRequerida = request.body.descricao
    const nomeColaboradorRequerido = request.body.nomeColaborador//pegamos o cliente envia no body

 
    const novaTarefa = {//inclusao de nova tarefa
        id: Math.random(0.2).toString(32).substr(2,9), // math.random() apresenta um id randomico 0,alguma coisa. //para considerar numero aleatorio + letras aleatorias usa-se .toString(32) - 32 caracteres
        dataInclusao: new Date(), // funcao que inclui a data atual
        concluido: false,
        descricao: descricaoRequerida,
        nomeColaborador: nomeColaboradorRequerido
    
    }
    tarefasJson.push(novaTarefa)//peguei essa nova tarefa, e dei um push no meu json


    /*fs.writeFile("../models/tarefas.json", JSON.stringify(tarefasJson),'utf8', function(err){
        if(err){
            return response.status(424).json({message: err})
        }
    
    }) //fs serve para manipular documentos dentro do servidor*/

    response.status(200).json(novaTarefa)

}

const deleteTask = (request, response) =>{
    const idRequerido = request.params.id
    const tarefaFiltrada = tarefasJson.findIndex(tarefa => tarefa.id == idRequerido)

    
}


module.exports = { // NAO ESQUECA DE EXPORTAR TODAS AS CONST CRIADAS
    getAll,
    getById,
    createTask
}