const express = require('express');
const router = express.Router();
const todo = require('../controllers/todo');


router.get('/', todo.homePageController);
router.get('/addTodo', todo.addTodoController );
router.get('/editTodo', todo.editTodoController);
router.get('/deleteTodo', todo.deletetodoController);
router.post('/addTodo', todo.addNewTodoController);
router.post('/update-todo/:id', todo.updateTodoController);
router.get('/confirm-delete', todo.deleteTheTodoController );
// router.delete('/deleteTodo', async (req, res, next) => {
//     try {
        
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

module.exports = router;