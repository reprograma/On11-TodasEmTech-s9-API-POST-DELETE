const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/parOLarController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/cadastrar", controller.creatContato)
router.delete("/:id", controller.deleteContato)

module.exports = router

