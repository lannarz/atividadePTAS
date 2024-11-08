const express = require('express')
const router = express.Router()
const controller = require('../controllers/itemsController.js')

router.get('/', controller.boasvindas)

router.get('/sobre', controller.cadastraLogin)

module.exports = router
