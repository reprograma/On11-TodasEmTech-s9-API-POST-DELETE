const  express  =  require ( "express" )
 roteador  const =  expresso . Roteador ( )
const  controller  =  require ( "../controllers/toDoController" )
roteador . get ( "/" ,  controlador . getAll )
roteador . get ( "/: id" ,  controlador . getById )
roteador . post ( "/ cadastrar" ,  controlador . createTask )
roteador . delete ( "/: id" ,  controlador . deleteTask )


módulo . exportações  =  roteador 