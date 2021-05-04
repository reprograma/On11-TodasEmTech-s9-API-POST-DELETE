const express = require("express");
const router = express.Router();

router.get("/", (req, resp) => {
    resp.status(200).json({
        titulo: "Contatos Reprograma",
        version: "1.0.0",
        message: "Bem vinda bebê"
    })
})

module.exports = router