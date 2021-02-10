const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    post: String,
    link: String
});

module.exports = mongoose.model('Post', PostSchema);