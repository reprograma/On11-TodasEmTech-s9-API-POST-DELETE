const contactsJson = require("../models/contatos.json")
const fs = require("fs")

const getAll = (request, response)=>{
    response.status(200).send(contactsJson)
}

const getById = (request, response)=>{
    const idRequerido = request.params.id 
    const contatoFiltrado = contactsJson.find(contacts => contacs.id == idRequerido)

    response.status(200).send(contatoFiltrado)
}

const createContact = (request, response) =>{
    const celularRequerido = request.body.celular
    const nomeRequerido = request.body.nome   
    const redesRequerida = request.body.redesSociais   

    console.log(request.body)
     console.log(nomeRequerido)
     console.log(celularRequerido)
     console.log(redesRequerida
        )

const novoContato ={
        id: Math.random().toString(32).substr(2, 9),
        nome: nomeRequerido,
        celular: celularRequerido,
        redesSociais: redesRequerida,
        
    }

    contactsJson.push(novoContato)
    
    fs.writeFile("./src/models/contatos.json", JSON.stringify(contactsJson), 'utf8', function(err){
        if(err){
            return response.status(424).send({message: err})
        }
    
    })

    response.status(200).send(novoContato)
}

const deleteContact = (request, response)=>{
    const idRequerido = request.params.id
    const contatoFiltrado = contactsJson.find(contact => contact.id == idRequerido)
    const indice = contactsJson.indexOf(contatoFiltrado)
    contactsJson.splice(indice, 1,)

    

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contactsJson), 'utf8', function(err){
        if(err){
            return response.status(424).send({message: err})
        }
    })

    response.status(200).json([{
        "mensagem" : "contato deletado com sucesso", contactsJson
            }])

}


module.exports = {
getAll,
getById,
createContact,
deleteContact
}