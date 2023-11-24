const Chapter = require("../models/chapter.model")

exports.create = async (body) => {
    const newTweet = new Chapter(body)
    return newTweet.save()
}