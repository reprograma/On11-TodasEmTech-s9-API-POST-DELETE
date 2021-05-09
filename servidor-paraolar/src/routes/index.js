const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    titulo: "Contatinhos API - Lilit Reprograma",
    version: "1.0.0",
    mensagem: "Ben vindes a API Contatinhos!"
  })
})

module.exports = router;