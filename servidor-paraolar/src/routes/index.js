const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "Para-O-Lar Api - Reprograma",
        "version": "1.0.0",
        "mensagem": "APIzinha"
    })
})

module.exports = router