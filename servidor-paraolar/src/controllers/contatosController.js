const contatosJson = require("../models/contatos.json");

// Retorna todos os contatos
const getAll = (request, response)=>{
    response.status(200).send(contatosJson);
}

// Retorna um contato por id
const getById = (request, response)=>{
    const idRequerido = request.params.id;
    const contatoFiltrado = contatosJson.find(contato => contato.id === idRequerido);

    response.status(200).send(contatoFiltrado);
}

const createContact = (request, response) => {
    // Deverá ser enviado um BODY
    const nomeRequerido = request.body.nome;
    const celularRequerido = request.body.celular;
    const redesSociaisRequerida = request.body.redesSociais;

    // Criar um objeto
    const novoContato =  {
        id: "2",
        dataInclusao: "19/10/2021",
        nome: nomeRequerido,
        celular: celularRequerido,
        redesSociais: redesSociaisRequerida
    }

    // Resposta
    response.status(200).send(novoContato);
}

module.exports = {
    getAll,
    getById,
    createContact
}