const mongoose = require('mongoose')
const {Schema} = mongoose;

const postSchema = new Schema(
    {
        author: {type: String, required: true},
        content: {type: String, required: true},   
    },  { timestamps: true });

mongoose.model('posts', postSchema);