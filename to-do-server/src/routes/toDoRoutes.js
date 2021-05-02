const express = require("express");
const router = express.Router(); // Router é uma função do express
const controller = require("../controllers/toDoController")

// Apenas "/" pq o /tarefas já está no app.js
router.get("/", controller.getAll);
router.post("/cadastrar", controller.createTask);
router.get("/:id", controller.getById);
router.delete("/:id", controller.deleteTask);

module.exports = router;