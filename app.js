const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const ConnectMongoDb = require('./init/mongoDb');
const todoRouter = require('./routes/todo');
const dotenv = require('dotenv');

const app = express(); //init app
dotenv.config();//Environment variable

ConnectMongoDb();

app.set('view engine', 'ejs'); //set view engine
app.use(express.static(path.join(__dirname, 'public')));//we are joining public folder to this
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', todoRouter);

module.exports = app;