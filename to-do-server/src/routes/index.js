const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
   response.status(200).json({
      título: "To-do Api - Reprograma",
      version: "1.0.0",
      mensagem: "bem vinda!!"
   })
})

module.exports = router