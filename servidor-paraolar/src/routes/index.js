const  express  =  require ( "express" )
 roteador  const =  expresso . Roteador ( )

roteador . get ( "/" ,  ( solicitação ,  resposta ) => {
    resposta . status ( 200 ) . json ( {
        "titulo" : "Contatinhos Api - Reprograma" ,
        "versão" : "1.0.0" ,
        "mensagem" : "Bem vindo"
    } )
} )

módulo . exportações  =  roteador