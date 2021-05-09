
const express = require("express");

const router = express.Router();
 

router.get( "/", (request, response)=> {

    response.status(200).json(
        {
            "titulo": "Contatos",
        "version": "1.0.0",
        "mensagem": "Seja bem vinda!"
             
        }
    )

})


module.exports = router;

