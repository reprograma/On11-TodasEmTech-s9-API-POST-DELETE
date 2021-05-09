const contatosJson = require("../models/contatos.json")
const fs = require("fs")


const getAll = (request, response)=>{
    response.status(200).send(contatosJson)
}
const getById = (request, response)=>{
    const idRequirido = request.params.id
    const tarefaFiltrada = contatosJson.find(tarefa => tarefa.id == idRequirido)

    response.status(200).send(tarefaFiltrada)
}

const createTask = (request, response) => {
    const nomeRequirido = resquest.body.nomeRequirido
    const celularRequirido = request.body.celular
    const redesSociaisRequirido = request.body.redesSociaisRequirido



    const novaTarefa ={
        id: Math.random().toString(32).substr(2,9), 
        nome: nomeRequirido,
        celular: celularRequirido,
        redesSociais: redesSociaisRequirido
    }

    contatosJson.push(novaTarefa)

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), "utf8", function (err){
         if (err){
             return response.status(424).send({message: err})
         }
     })

    response.status(200).send(novaTarefa)
}

const deleteTask = (resquest, response)=>{
    const idRequirido = request.params.idc
    const tarefaFiltrada = contatosJson.find(tarefa => tarefa.id == idRequirido)
    const indice = tarefaJson.IndexOf(tarefa)

    contatosJson.splice(indice,1)
    //se quiser mudar.
     fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), "utf8", function (err){
         if (err){
             return response.status(424).send({message: err})
     }
    })


    response.status(200).json([{
        "mensagem" : "Tarefa do contato deletada com sucesso!",
        contatosJson

    }])
}
module.exports ={
    getAll,
    getById,
    createTask,
    deleteTask
}