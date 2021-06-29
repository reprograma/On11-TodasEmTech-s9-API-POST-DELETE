const contatos = require('../models/contatos.json');
const fs = require('fs');

// GET
const getAll = (require, response) => response.status(200).send(contatos);

const getById = (require, response) => {
    const contato = contatos.find(contato => contato.id == require.params.id);
    if (contato == undefined) response.status(400).send({ mensagem: 'digite novamente por favor ' });
    else response.status(200).send(contato);
}

// POST



const createContato = (require, response) => {
    const { nome, celular, redesSociais } = require.body;

    if (!nome || !celular || !redesSociais || nome == "" || celular == "" || redesSociais == "") {
        response.status(400).send({ mensagem: 'confira os campos e envie novamente por favor' })
        return;
    }

    contatos.push({
        id: Math.random().toString(32).substr(2, 9).toLocaleUpperCase(),
        nome,
        celular,
        redesSociais,
    })

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatos), 'utf8',  (err) => {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(201).send(contatos);

}

const deleteById = (require, response) => {
    const id = contatos.findIndex(contato => contato.id == require.params.id);
    if (id==-1) return response.status(304).send({ mensagem: 'id não encontrado, nenhum arquivo foi alterado' });

    contatos.splice(id, 1); // removendo

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatos), 'utf8',  (err) => {
        if (err) {
            return response.status(424).send({ message: err })
        }
    })

    response.status(200).send({ ' mensagem ' :  'deletado'});
}

module.exports = {
    getAll,
    getById,
    createContato,
    deleteById,
}