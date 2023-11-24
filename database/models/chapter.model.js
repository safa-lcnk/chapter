const mongoose = require('mongoose')
const schema = mongoose.Schema

const chapterSchema = schema({
    title: String,
    lesson: Number,
  });

const Chapter = mongoose.model('chapter', chapterSchema);

module.exports = Chapter;