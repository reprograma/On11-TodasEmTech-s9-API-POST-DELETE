const express = require("express")
const router = express.Router()
const controller = require("../controllers/toDoController")

router.get("/", (controller.getAll))
router.get("/:id", (controller.getById))
router.post("/cadastrar", (controller.createTask)) //criar rota de criar é com .post


module.exports = router