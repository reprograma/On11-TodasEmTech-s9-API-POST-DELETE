const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "Titulo":"Contatinhos API",
        "Versão":"1.0.0",
        "Mensagem":"Bem vindo(a) ao projeto!"
    })
})

module.exports = router