const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    date: String
});

module.exports = mongoose.model('tasksApp', NoteSchema);
