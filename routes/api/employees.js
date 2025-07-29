const express = require('express')
const router = express.Router()
const employeesController = require('../../controllers/employeesController')

router.route('/')
  .get()
  .post()
  .put()
  .delete()

router.route('/:id')
  .get()

module.exports = router