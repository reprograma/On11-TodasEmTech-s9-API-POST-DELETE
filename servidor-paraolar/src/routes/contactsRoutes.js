const express = require("express")
const router = express.Router()
const controller = require("../controllers/contactsController")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/register", controller.createContact)
router.delete("/:id", controller.deleteContact)

module.exports = router