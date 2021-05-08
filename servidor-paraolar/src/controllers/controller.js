const contatosJson = require("../models/contatos.json")
const fs = require("fs")


// chama todos os contatos
const todosContatos = (request,response)=>{
    response.status(200).json(contatosJson)
}

// filtrar contato por id
const idContatos = (request, response)=>{
    const idPessoa = request.params.id

    const filtrarPessoa = contatosJson.find(
        contato => contato.id == idPessoa
    )

    response.status(200).json(filtrarPessoa)
}

//criar contatos com id randomico
const novoContato = (request, response)=>{
    
    const nomeNovo = request.body.nome

    const celularNovo = request.body.celular

    const emailNovo = request.body.redesSociais

    console.log(nomeNovo)
    console.log(celularNovo)
    console.log(emailNovo)

    const pessoaNova = {
        id: Math.random().toString(32).substring(2,10),
        nome: nomeNovo,
        celular: celularNovo,
        redesSociais: emailNovo
    }

    contatosJson.push(pessoaNova)

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), 'utf8', function(err){
        if(err){
            return response.status(424).send({message: err})
        }
    })

    response.status(200).json(pessoaNova)
}

const deletarPessoa = (request, response)=>{
    const idPessoa = request.params.id

    const filtrarPessoa = contatosJson.find(
        contato => contato.id == idPessoa
    )

    const indice = contatosJson.indexOf(filtrarPessoa)
    contatosJson.splice(indice,1)

    fs.writeFile("./src/models/contatos.json", JSON.stringify(contatosJson), 'utf8', function(err){
        if(err){
            return response.status(424).send({message: err})
        }
    })

    response.status(200).json([{
        "mensagem":"pessoa removida da lista"
    }])

}


module.exports = {
    todosContatos,
    idContatos,
    novoContato,
    deletarPessoa
}