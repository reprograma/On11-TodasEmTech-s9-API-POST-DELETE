const contatosJson = require("../models/contatos.json")
const fs = require("fs")

const getAll = (request, response)=>{
    response.status(200).send(contatosJson)
}

const getById = (request, response) =>{
    const idRequirido = request.params.id
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequirido)

    response.status(200).send(contatoFiltrado)
}

const createContact = (request, response) =>{
    const contatoRequirido = request.body.celular
    const nomeColaboradorRequirido = request.body.nome
    const redesSociaisRequirida = request.body.redesSociais

    const novoContato ={
        id: Math.random().toString(32).substr(2,9),  // o (32) faz aparecer letras no meio. Substring define onde vai começar e o tamanho total
        nome: nomeColaboradorRequirido,
        celular: contatoRequirido,
        redesSociais: redesSociaisRequirida
        
    }

    contatosJson.push(novoContato)

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), 'utf8', function(err){
        if(err) {
            return response.status(424).send({message: err})
        }
    })

    response.status(200).send(novoContato)

}

const deleteContact = (request, response)=>{
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
    createContact,
    deleteContact
}