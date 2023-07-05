const TodoService = require("../services/todo.service.js");
const TodoController = {};

TodoController.getAllToDos = async (res, req) => {
    try{
        const todos = await TodoService.getAllToDos();
        res.status(200).json({
            todos: todos,
        });
    } catch (error) {
        res.status(400);
    }
}

export default TodoController;