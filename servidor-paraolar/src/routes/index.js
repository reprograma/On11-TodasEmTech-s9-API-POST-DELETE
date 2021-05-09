const express = require("express")
const router = express.Router()

router.get("/", (request,response)=>{
    response.status(200).json({
    "título": "Lista de Contatos",
    "version": "1.0.0",
    "mensagem": "Bem vindas!",
    "Autora" : "Feito com amor por Ana Carolina"
    })
})

module.exports = router
