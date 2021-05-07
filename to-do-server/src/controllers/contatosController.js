const  contatosJSON  =  require ( "../models/contatos.json" ) ;
const  fs  =  require ( "fs" ) ;

const  getAll  =  ( req ,  resp )  =>  {
    resp.status( 200 ).send ( contatosJSON ) ;

}

const  getById  =  ( req ,  resp )  =>  {
    const  idRequired  =  req.params.id ;
    const  contactSelected  =  contatosJSON.find (elemento  =>  elemento.id  ==  idRequired ) ;

    resp.status ( 200 ).enviar ( contactSelected ) ;
}

const  deleteContact  =  ( req ,  resp )  =>  {
    const  idRequired  =  req . params . id ;
    const  contactSelected  =  contatosJSON.find( elemento  =>  elemento.id  ==  idRequired ) ;

    const índice =  contatosJSON.indexOf ( contactSelected ) ;

    const  {nome}  =  contactSelected ;

    contatosJSON.emenda ( índice ,  1 ) ;

    fs . writeFile ( "./src/models/contatos.json" ,  JSON.stringify ( contatosJSON ) , 'utf8' ,  function ( err )  {
        if ( err )  {
            return  resp . status ( 424 ) . enviar ( { mensagem : err } ) ;
        }
    } ) ;

    resp.status( 200 ).json ( [
        {
            "message" : ` ${nome} deletado da lista de contatinhos. = (` ,
         }
    ] ) ;
}

    const  createContact  =  ( req ,  resp )  =>  {
    const  nameRequired  =  req . corpo . nome ;
    const  mobileRequired  =  req . corpo . celular ;
    const  socialsRequired  =  req . corpo . redesSociais ;

    const  newContact  =  {
        id : Math . aleatório ( ) . toString ( 32 ) . substr ( 2 , 10 ) ,
        nome : nameRequired ,
        celular : mobileRequired ,
        redesSociais : socialsRequired
    }

    contatosJSON.push ( novoContato ) ;

    fs . writeFile ( "./src/models/contatos.json" , JSON.stringify ( contatosJSON ) ,  'utf8' ,  function ( err ) {
        if ( err )  {
            return  resp .status( 424 ).send ( { mensagem : err } ) ;
        }
    } ) ;

    resp.status( 200 ).enviar ( novoContato ) ;

}


módulo.exportações  =  {
    getAll ,
    getById ,
    deleteContact ,
    createContact,
} 