const { request, response } = require("express")
const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        titulo: "Contatos API",
        version: "1.0.0",
        mensagem: "API está rodando"
    })
})

module.exports = router