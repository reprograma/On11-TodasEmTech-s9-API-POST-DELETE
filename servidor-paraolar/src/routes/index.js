const express = require("express")
const router = express.Router()

router.get("/", (request,response)=>{
    response.status(200).json({
        titulo: "Contatos API",
        version: "1.0.0",
        mensagem: "Bem vindes!!!"
    })
})

module.exports = router
