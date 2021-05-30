const  express  =  require ( "express" )
const  app  =  express ( )

app . usar ( express . json ( ) )

 índice  const =  requer ( "./routes/index" )
 const  contatos  =  require ( "./routes/toDoRoutes" )

 app . use ( "/" ,  índice )
app . use ( "/ contatos" ,  contatos )


 módulo . exportações  =  aplicativo