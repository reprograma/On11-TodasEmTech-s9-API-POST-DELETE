const { Router } = require('express');
const controller = require('../controlles/contatinhosController');
const router = Router();

// GET
router.get("/", controller.getAll);
router.get("/:id", controller.getById);

// POST
router.post("/cadastrar" , controller.createContato)

// DELETE
router.delete("/:id", controller.deleteById);


module.exports = router;