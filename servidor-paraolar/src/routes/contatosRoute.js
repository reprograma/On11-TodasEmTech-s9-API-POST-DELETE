const express = require("express")
const router = express.Router()
const controller = require("../controller/contatosController")

router.get("/", controller.getByAll)
router.get("/:id", controller.getById)
router.post("/cadastrar", controller.createTask)
router.delete("/:id", controller.deleteTask)

module.exports = router