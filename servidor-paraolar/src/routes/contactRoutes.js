const express = require("express");
const router = express.Router();
const controller = require("../controllers/contactController");

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/cadastrar", controller.createContact);

module.exports = router;