const express = require("express")
const router = express.Router()

router.get("/", (request, response) => {
    response.status(200).json({
        "titulo": "Contatinhos API Reprograma",
        "Version": "1.0.0",
        "mensagem": "Quem tem contatinhos nessa pandemia?"
    })
})

module.exports = router