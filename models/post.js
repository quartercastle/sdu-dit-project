const mongoose = require('mongoose')
const {Schema} = mongoose;

const postSchema = new Schema(
    {
        author: {type: String, required: true},
        content: {type: String, required: true},
        comments: [{
            id: {type: Number},
            toId: {type: Number},
            author: {type: String},
            comment: {type: String},
            date: {type: String},
            vote: {type: Number}
        }]   
    },  { timestamps: true });

mongoose.model('posts', postSchema);

