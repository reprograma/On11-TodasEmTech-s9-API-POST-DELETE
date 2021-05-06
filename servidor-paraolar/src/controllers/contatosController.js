const contatosJson = require("../models/contatos.json");

const getAll = (request, response)=>{
    response.status(200).send(contatosJson)
}

const getById = (request, response)=>{
    const idREquerido = request.params.id
    const contatoFiltrado = contatosJson.find(contato => contato.id == idREquerido)

    response.status(200).send(contatoFiltrado)
}

const createTask = (request, response) =>{
    const nomeContato = request.body.nomeContato;
    const celular = request.body.celular;
    const redesSociais = request.body.redesSociais;

    const novoContato = {
        id: Math.random().toString(32).substr(2,9),
        nome: nomeContato,
        celular: celular,
        redesSociais: redesSociais
    }

    response.status(200).send(novoContato);
}

const deleteTask = (request, response) =>{
    const id = request.params.id;
    const contatoFiltrado = contatosJson.find(contato => contato.id == id);

    const indice = contatosJson.indexOf(contatoFiltrado);
    contatosJson.splice(indice, 1);

    response.status(200).json([{
        "mensagem": "Contato deletado com sucesso",
        contatosJson
    }])
}

module.exports = {
    getAll,
    getById,
    createTask,
    deleteTask
}