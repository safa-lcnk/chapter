const { chapterForm } = require('../controllers/chapterForm.controller')

const router = require('express').Router()

router.get('/', chapterForm)

module.exports = router