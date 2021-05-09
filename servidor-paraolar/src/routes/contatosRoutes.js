
const express = require("express")
const router = express.Router();
const controller = require("../controllers/contatosController")


router.get( "/", controller.ListarContatos )

router.get("/:id", controller.GetById)

router.get("/nome", controller.GetByName)

router.post("/add", controller.CriarContato)

router.delete("/apagar/:id", controller.deletarContato)

module.exports = router