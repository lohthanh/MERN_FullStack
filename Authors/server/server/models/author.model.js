const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    authorName: { type: String, 
                  minLength: [3, "Name must be at least 3 characters long."],
                  required: [true, "Name is required."]}},
    {timestamps: true});

module.exports.Author = mongoose.model('Author', AuthorSchema);