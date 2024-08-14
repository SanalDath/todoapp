const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

const app = express(); //init app
const PORT = process.env.PORT || 3001;
const connectionUrl = 'mongodb://localhost:27017/todoDb';

mongoose
    .connect(connectionUrl)
    .then(() => console.log('Connection to database successfuly'))
    .catch((error) => console.log(error.message));

app.set('view engine', 'ejs'); //set view engine
app.use(express.static(path.join(__dirname, 'public')));//we are joining public folder to this 

app.get('/', (req, res, next) => {
    try {
        res.render('index')
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/addtodo', (req, res, next) => {
    try {
        res.render('newTodo');
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
app.get('/editTodo', (req, res, next) => {
    try {
        res.render('updateTodo');
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
app.get('/deleteTodo', (req, res, next) => {
    try {
        res.render('deleteTodo');
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


app.listen(PORT, () => {
    console.log(`The server is successfuly running on port ${PORT}`);
});