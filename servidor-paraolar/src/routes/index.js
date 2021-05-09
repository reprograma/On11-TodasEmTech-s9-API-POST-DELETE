const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
   response.status(200).json({
      titulo: "Contatinhos API - ParaoLar",
      vserion: "1.0.0",
      mensagem: "Bem vinda a minha lista de contatinhos"
   })
})

module.exports = router