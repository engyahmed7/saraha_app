const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postModel = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    commentsIds: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postModel);