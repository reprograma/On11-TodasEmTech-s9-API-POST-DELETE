const contatosJSON = require("../models/contatos.json");
const fs = require("fs");

const getAll = (req, resp) => {
    resp.status(200).send(contatosJSON);

}

const getById = (req, resp) => {
    const idRequired = req.params.id;
    const contactSelected = contatosJSON.find(element => element.id == idRequired);

    resp.status(200).send(contactSelected);
}

const deleteContact = (req, resp) => {
    const idRequired = req.params.id;
    const contactSelected = contatosJSON.find(element => element.id == idRequired);

    const index = contatosJSON.indexOf(contactSelected);

    const { nome } = contactSelected;

    contatosJSON.splice(index, 1);

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJSON),'utf8', function(err) {
        if(err) {
            return resp.status(424).send({message: err});
        }
    });
    
    resp.status(200).json([
        {
            "message": `${nome} deletado da lista de contatinhos. =(`,
         }
    ]);
}

const createContact = (req, resp) => {
    const nameRequired = req.body.nome;
    const mobileRequired = req.body.celular;
    const socialsRequired = req.body.redesSociais;

    const newContact = {
        id: Math.random().toString(32).substr(2,10),
        nome: nameRequired,
        celular: mobileRequired,
        redesSociais: socialsRequired
    }

    contatosJSON.push(newContact);

    fs.writeFile("./src/models/contatos.json",JSON.stringify(contatosJSON), 'utf8', function(err){
        if(err) {
            return resp.status(424).send({message: err});
        }
    });

    resp.status(200).send(newContact);

}


module.exports = {
    getAll,
    getById,
    deleteContact,
    createContact
}