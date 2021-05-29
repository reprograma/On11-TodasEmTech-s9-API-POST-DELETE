const express = require("express")
const router = express.Router()//Router com maiuscula ja vem pronta do express / router minuscula é a variavel criada da execução pronta // essa função cria ROTAS

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "To-do Api - Reprograma",
        "version": "1.0.0",
        "mensagem": "bem vinda bebe"
    })
})
module.exports = router