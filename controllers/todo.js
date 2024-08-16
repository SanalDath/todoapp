const todo = require('../models/Todo');
const moment = require('moment');

const homePageController = async (req, res, next) => {
    try {
        const todos = await todo.find({}).sort({ createdAt: -1 }); 
        res.locals.moment = moment;
        res.render('index', { title: 'Todo List', todos });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addTodoController = async (req, res, next) => {
    try {
        res.render('newTodo', { title: 'Add Todo' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletetodoController = async (req, res, next) => {
    const { id } = req.query;
    try {
        res.render('deleteTodo', { title: 'Delete Todo', id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const editTodoController = async (req, res, next) => {
    try {
        const { id } = req.query; // Extracting the id from the query
        const Todo = await todo.findById(id);
        if (!Todo) {
            return res.status(404).send('Todo not found');
        }
        res.render('updateTodo', { title: 'Edit Todo', Todo });
    } catch (error) {
        console.error('Error in editTodoController:', error);
        res.status(500).json({ message: error.message });
    }
};



const addNewTodoController = async (req, res, next) => {
    try {
        const { title, disc } = req.body;
        const newTodo = new todo({ title, disc });
        await newTodo.save()
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTodoController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, disc } = req.body;
        const Todo = await todo.findById(id);
        if (!Todo) {
            res.status(500).json({message: "Todo not found"})
        }
        Todo.title = title;
        Todo.disc = disc;
        await Todo.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTheTodoController = async (req, res, next) => {
    try {
        const { id, confirm } = req.query;

        if (confirm === "yes") {
            await todo.findByIdAndDelete(id)
        };

        res.redirect('/');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    homePageController,
    addTodoController,
    deletetodoController,
    editTodoController,
    addNewTodoController,
    updateTodoController,
    deleteTheTodoController
};
