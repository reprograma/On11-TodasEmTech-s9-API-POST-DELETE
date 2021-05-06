const express = require("express");
const router = express.Router();

// Rota de apresentação
router.get("/", (request, response)=>{
    response.status(200).json({
        "title": "Semana 9 - Contatinhos API - Reprograma",
        "version": "1.0.0",
        "message": "Welcome..."
    })
})

module.exports = router;

