const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "Api - Contatos",
        "version": "1.0.0",
        "mensagem": "Agenda de contatinhos!"
    })
})
module.exports = router