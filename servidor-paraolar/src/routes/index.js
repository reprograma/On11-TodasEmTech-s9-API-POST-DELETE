const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.status(200).json({
    "titulo": "Contatinhos API - Reprograma",
    "version": "1.0.0",
    "mensagem": "Bem-vinda! ⌒(｡･.･｡)⌒",
  });
});

module.exports = router;