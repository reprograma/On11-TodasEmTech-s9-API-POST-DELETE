const { response } = require("express")
const contatinhosJson = require("../models/contatos.json")
const fs = require("fs")

const getAll = (request, response)=>{
   response.status(200).send(contatinhosJson)
}

const getById = (request, response)=>{
   const idRequisitado = request.params.id
   const contatatinhosFiltrados = contatinhosJson.find(contatinho => contatinho.id == idRequisitado)

   response.status(200).send(contatatinhosFiltrados)
}

const creatContact = (request, response) =>{
   const nomeRequerido = request.body.nome
   const telefoneRequerido = request.body.celular
   const redeRequerida = request.body.redesSociais

   console.log(nomeRequerido)
   console.log(telefoneRequerido)
   console.log(redeRequerida)

   const novoContato = {
      id: Math.random().toString(32).substr(2,9),
      nome: nomeRequerido,
      celular: telefoneRequerido,
      redesSociais: redeRequerida
   }
   contatinhosJson.push(novoContato)

   fs.writeFile("./src/models/contatos.json", JSON.stringify(contatinhosJson), "utf8", function(err){
      if(err){
         return response.status(424).send({message: err})
      }
   })

   response.status(200).send(novoContato)
}

const deleteContact = (request, response)=>{
   const idRequisitado = request.params.id
   const contatatinhosFiltrados = contatinhosJson.find(contatinho => contatinho.id == idRequisitado)
   
   const indice = contatinhosJson.indexOf(contatatinhosFiltrados)
   contatinhosJson.splice(indice, 1)

   response.status(200).json([{
      "mensagem": "Contatinho deletado com sucesso!",
      contatinhosJson
   }])
}

module.exports ={
   getAll,
   getById,
   creatContact,
   deleteContact
}