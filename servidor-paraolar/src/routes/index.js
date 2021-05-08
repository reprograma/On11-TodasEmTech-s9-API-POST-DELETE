const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "title":"paraolar api",
        "message":"do this"
    })
})

module.exports = router 