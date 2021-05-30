const  cadastroJson  =  require ( "../models/contatos.json" )
// const fs = require ("fs")

const  getAll  =  ( solicitação ,  resposta )  => {
    resposta . status ( 200 ) . enviar ( cadastroJson )
}

const  getById  =  ( solicitação ,  resposta )  => {
    const  idRequerido  =  pedido . params . eu ia
    const  cadastroFiltrado  =  cadastroJson . encontrar ( contato  =>  contato . id  ==  idRequerido )


    resposta . status ( 200 ) . enviar ( cadastroFiltrado )

}

const  createTask  =  ( solicitação ,  resposta )  => {
    const  nomeRequerido  =  solicitação . corpo . nome

    const  celularRequeirido  =  pedido . corpo . celular
    const  redeRequerida  =  solicitação . corpo . redesSociais


        console . log ( Requeirido celular )
        console . log ( nomeRequerido )
        console . log ( redeRequerida )

    const  novoContato  = {
        id : Math . aleatório ( ) . toString ( 32 ) . substring ( 2 , 9 ) ,
        nome : nomeRequerido ,
        celular : Requeirido celular ,
        redesSociais : redeRequerida


    }

    cadastroJson . push ( novoContato )



    resposta . status ( 200 ) . enviar ( novoContato )


}

const  deleteTask  =  ( solicitação ,  resposta )  => {
    const  idRequerido  =  pedido . params . eu ia
    const  tarefaFiltrada  =  cadastroJson . encontrar ( contato  =>  contato . id  ==  idRequerido )
    const  indice  =  cadastroJson . indexOf ( tarefaFiltrada )
    cadastroJson . splice ( índice ,  1 )
    resposta . status ( 200 ) . json ( [ {
        "menssagem" : "Contato deletado com sucesso" ,
        cadastroJson
    } ] )
}

módulo . exportações  = {
    getAll ,
    getById ,
    createTask ,
    deleteTask
} 