const mongoose = require("mongoose");

const {Schema} = mongoose;

const TodoSchema = Schema({
    name: string,

});

const TodoModel = mongoose.model('Todos', TodoSchema, "todos");

export default TodoModel;