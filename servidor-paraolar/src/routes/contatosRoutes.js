const express = require("express");
const router = express.Router();
const controller = require("../controllers/contatosController");

// Rota de contatos
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/cadastrar", controller.createContact);
router.delete("/:id", controller.deleteContact);

module.exports = router;