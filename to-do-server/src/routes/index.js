const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.status(200).json({
    "titulo": "To-do API - Reprograma",
    "version": "1.0.0",
    "mensagem": "Bem-vinda, gata（=´∇｀=）" 
  });
});

module.exports = router;