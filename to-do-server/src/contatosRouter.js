const  express  =  require ( "express" ) ;
 const  router =  express.Router ( ) ;
 const controller = ( "../controllers/contatosController" ) ;



 router.get ( "/" ,  controller.getAll ) ;
 router.get ( "/: id" ,  controller.getById ) ;
 router.delete ( "/: id" ,  controller.deleteContact ) ;
 router.post ( "/ cadastrar" ,  controller.createContact ) ;


módulo.exportações  =  router ;