const Chapter = require("../database/models/chapter.model");
const { create } = require("../database/queries/chapter.queries");

exports.chapterForm = (req, res, next) => {
    res.render('home')
}

exports.createNewChapter = async (req, res, next) => {
    const { title, lesson } = req.body;
    try {
        const chapter = await create({title, lesson});
        res.render('home', {chapter});
    } catch (error) {
       next(error) 
    }
}