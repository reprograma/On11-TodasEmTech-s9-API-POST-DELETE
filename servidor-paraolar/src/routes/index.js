const express = require("express")
const router = express.Router()

router.get("/", (request, response) =>{
    response.status(200).json({
        "titulo": "Contatos - Reprograma",
        "version": "1.0.0",
        "mensagem": "Bem-vinda(o) usuária(o)!"
    })
})

module.exports = router