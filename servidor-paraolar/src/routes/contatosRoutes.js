const express = require("express")
const router = express.Router()
const controller = require("../controllers/contatosController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/cadastrar", controller.createTask)
router.delete("/:id", controller.deleteContato)

module.exports = router 