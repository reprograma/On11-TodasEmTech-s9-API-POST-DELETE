const express = require("express")
const router= express.Router()
const controller = require("../controllers/paraOLarController")

router.get("/", controller.getAll)
router.get("/:id",controller.getById)
router.post("/adicionar",controller.createTask)
router.delete("/:id",controller.deleteTask)

module.exports = router
