const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    "titulo": "Contatinhos API",
    "version": "1.0.0",
    "mensagem": "Seja bem-vindaa"
  })
});

module.exports = router;