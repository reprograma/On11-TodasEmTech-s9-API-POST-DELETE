const express = require('express')
const router = express.Router()
const controller = require('../controllers/toDoController')

router.post('/cadastrar', controller.createTask)
router.delete('/:id', controller.deleteTask)

module.exports = router

