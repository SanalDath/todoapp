const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    disc: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const todo = mongoose.model('todo', todoSchema);

module.exports = todo;