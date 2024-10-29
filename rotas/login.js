const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllerLogin')

router.get('/', controller.login)

router.get('/sobre', controller.cadastraLogin)

module.exports = router
