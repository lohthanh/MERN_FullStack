const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: { type: String, required: [true, "First Name is required"], minLength: [1, "First name must be at least 1 characters long"] },
    lastName: { type: String, required: [true, "Last Name is required"], minLength: [2, "First name must be at least 2 characters long"] }
}, { timestamps: true });

module.exports.Person = mongoose.model('Person', PersonSchema);

