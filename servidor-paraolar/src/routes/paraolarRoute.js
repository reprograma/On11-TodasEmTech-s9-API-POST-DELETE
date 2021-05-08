const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")

router.get("/", controller.todosContatos)
router.get("/:id", controller.idContatos)

router.post("/cadastrar", controller.novoContato)

router.delete("/:id", controller.deletarPessoa)

module.exports = router 