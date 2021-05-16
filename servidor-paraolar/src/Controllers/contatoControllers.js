const contatosJson = require("../models/contatos.json")


const getAll = (request, response)=>{
    response.status(200).send(contatosJson)
}

const getById = (request, response) =>{
    const idRequirido = request.params.id
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequirido)

    response.status(200).send(contatoFiltrado)
}

const createTask = (request, response) =>{
    const nomeRequerido = request.body.nome
    const celularRequerido = request.body.celular
    const redesSociaisRequerida = request.body.redesSociais
   

    const novoContato ={
        id: Math.random().toString(32).substr(2,9),
        nome: nomeRequerido,
        celular: celularRequerido,
        redesSociais: redesSociaisRequerida
    }

    contatosJson.push(novoContato)

    response.status(200).send(novoContato)

}

const deleteTask = (request, response)=>{
    const idRequirido = request.params.id
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequirido)

    const indice = contatosJson.indexOf(contatoFiltrado)
    contatosJson.splice(indice, 1)

    response.status(200).json([{
        "mensagem": "Contato deletado com sucesso",
        contatosJson
    }])

}


module.exports ={
    getAll,
    getById,
    createTask,
    deleteTask
}