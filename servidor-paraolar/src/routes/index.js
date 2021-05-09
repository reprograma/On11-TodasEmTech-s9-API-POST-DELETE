const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "API para o lar - Reprograma",
        "version": "1.0.0",
        "mensagem": "bem vindeee"
    })
})
module.exports = router