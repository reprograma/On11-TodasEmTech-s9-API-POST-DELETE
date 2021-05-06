const express = require("express")

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    titulo: "To-do API - Reprograma",
    version: "1.0.0",
    mensagem: "bem vinda ao Tudo-server!"
  })
})

module.exports = router