const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "title": "servidor-paraolar - Reprograma",
        "version": "1.0.0",
        "messagem": "Seja Bem Vindo!"
    })
})

module.exports = router 