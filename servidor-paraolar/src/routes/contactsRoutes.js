const express = require('express')
const router = express.Router()
const controller = require('../controllers/contactsController')

router.get('/', controller.GET_AllContacts)
router.get('/:id', controller.GET_ContactById)

router.post('/register', controller.POST_NewContact)

router.delete('/:id', controller.DELETE_ContactById)

module.exports = router;