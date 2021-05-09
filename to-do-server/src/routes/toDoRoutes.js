const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/toDoController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/cadastrar", controller.creatTask)
router.delete("/:id", controller.deleteTask)

module.exports = router

