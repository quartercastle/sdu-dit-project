const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        user: { type: String, required: true },
        time: { type: [String], required: true },
        text: {type: String, required: true}
        
    },
    { timestamps: true },
)

module.exports = mongoose.model('posts', Post)