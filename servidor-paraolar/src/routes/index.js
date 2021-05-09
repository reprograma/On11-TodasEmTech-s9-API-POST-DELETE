const express = require ("express")
const router = express.Router()

router.get("/", (request,response)=>{
    response.status(200).json({
        "titulo": "Parolar - Reprograma",
        "version": "1.0.0",
        "mensagem": "bem vida Contatinho"
    })
})

module.exports = router