const express = require("express")
const router = express.Router()
const controller = require("../controllers/contatosController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.delete("/:id", controller.deleteTask)
router.post("/cadastrar", controller.createTask)



module.exports = router