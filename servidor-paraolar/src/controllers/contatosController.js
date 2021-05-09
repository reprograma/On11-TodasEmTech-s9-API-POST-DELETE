
const { response } = require("express");
const contatos = require("../models/contatos.json");

const ListarContatos = (request, response)=>{
    response.status(200).send(contatos);
}

const GetById = ( request, response)=>{
    
    const id = request.params.id;
    const idFiltrado = contatos.find(contato => contato.id == id);

    response.status(200).send(idFiltrado)
        


}


const GetByName = (request, response) => {

    const nome = request.query.toLowerCase();
    const nomeFiltrado = contatos.find( nomes => nomes.nome.toLowerCase() == nome)
    
    
    response.status(200).send(nomeFiltrado)




}

const CriarContato = (request, response)=>{


    const id = contatos.length+1;
    const nome = request.body.nome;
    const celular = request.body.celular
    const redesSociais = request.body.redesSociais


    const novoContato =  {
        "id": id,
        "nome": nome,
        "celular": celular,
        "redesSociais": redesSociais
    }

    

      contatos.push(novoContato)

    response.status(200).send(contatos)





}

const deletarContato = ( request , response)=>{

const Id = request.params.id
const IdFiltrado = contatos.find( contato => contato.id == Id)
const index = contatos.indexOf(IdFiltrado)

contatos.splice(index, 1 )


response.status(200).send( contatos)








}





module.exports ={
    ListarContatos,
    GetById, 
    GetByName,
    CriarContato,
    deletarContato
}