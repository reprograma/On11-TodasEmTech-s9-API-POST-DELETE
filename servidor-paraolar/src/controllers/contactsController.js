const contatosJson = require("../models/contatos.json")
const fs = require("fs")
const { response } = require("express")

const getAll = (request, response)=>{
    response.status(200).send(contatosJson)
}

const getById = (request, response)=>{
    const idRequest = request.params.id
    const contactsFilter = contatosJson.find(contato => contato.id == idRequest)

    response.status(200).send(contactsFilter)
}

const createContact = (request, response)=>{
    const contactName = request.body.name
    const contactCelphone = request.body.celphone
    const contactSocialMedia = request.body.socialmedia

    console.log(contactName)

    const newContact = { 
    id: Math.random().toString(32).substr(2,9),
    nome: contactName,
    celular: contactCelphone,
    redesSociais: contactSocialMedia
}

    contatosJson.push(newContact)

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), 'utf8', function(err){
        if(err){
            return response.status(424).send({mensagem: err})
    
        }
    })

    response.status(200).send(newContact)
}

const deleteContact = (request, response)=>{
    const idRequest = request.params.id
    const contactsFilter = contatosJson.find(contato => contato.id == idRequest)

    const index = contatosJson.indexOf(contactsFilter)

    contatosJson.splice(index, 1)

    response.status(200).send([{
        "mensagem":"Contact deleted.",
        contatosJson
    }])

}

module.exports = {
    getAll,
    getById,
    createContact,
    deleteContact
}