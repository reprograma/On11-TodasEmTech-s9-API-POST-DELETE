const contatosJson = require("../models/contatos.json");
const fs = require("fs");

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

// Cadastra um novo contato
const createContact = (request, response) => {
    // Deverá ser enviado um BODY
    const nomeRequerido = request.body.nome;
    const celularRequerido = request.body.celular;
    const redesSociaisRequerida = request.body.redesSociais;

    // Cria um objeto
    const novoContato =  {
        id: Math.random().toString(32).substr(2,9),
        dataInclusao: new Date(),
        nome: nomeRequerido,
        celular: celularRequerido,
        redesSociais: redesSociaisRequerida
    }

    // Adiciona novo contato
    contatosJson.push(novoContato);

    // Escreve no arquivo JSON
    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), "utf8", (err)=>{
        if(err){
            return response.status(424).send(
                {
                    message: err
                }
            );
        }
    });
    
    // Resposta
    response.status(200).send(novoContato);
}

module.exports = {
    getAll,
    getById,
    createContact
}