const { chapterForm, createNewChapter, viewChapter, goViewChapter, deleteChapter } = require('../controllers/chapterForm.controller')

const router = require('express').Router()

router.get('/', chapterForm)
router.post('/', createNewChapter)

// router.get('/:chapterId', viewChapter)
// router.post('/:chapterId', goViewChapter)

// router.delete('/:chapterId', deleteChapter)

module.exports = router