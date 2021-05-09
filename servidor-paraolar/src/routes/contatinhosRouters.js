const express = require("express")
const { route } = require(".")
const router =  express.Router()
const controller = require("../controllers/contatinhosController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/cadastrar", controller.creatContact)
router.delete("/:id", controller.deleteContact)

module.exports = router