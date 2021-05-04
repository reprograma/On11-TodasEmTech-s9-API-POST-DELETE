const express = require("express");
const router = express.Router();

router.get("/", (req, resp) => {
    resp.status(200).json({
        titulo: "To-do Api - Reprograma",
        version: "1.0.0",
        mensagem: "Bem vinda Bebe"
    })
})

module.exports = router