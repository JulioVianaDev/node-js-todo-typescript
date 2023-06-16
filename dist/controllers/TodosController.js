"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const Todo_1 = require("../models/Todo");
const Todos = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new Todo_1.Todo(Math.floor(Math.random() * 100), text);
    Todos.push(newTodo);
    res.json({ message: "Todo criado com sucesso" });
};
exports.createTodo = createTodo;
const getTodos = (req, res) => {
    res.status(200).json({ todos: Todos });
};
exports.getTodos = getTodos;
const updateTodo = (req, res) => {
    const todoId = Number(req.params.id);
    const updateText = req.body.text;
    const todoIndex = Todos.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("não deu pra atualizar o todo");
    }
    Todos[todoIndex] = new Todo_1.Todo(Todos[todoIndex].id, updateText);
    res.status(201).json({ message: "atualizado com sucesso" });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => {
    const todoId = req.params.id;
    const todoIndex = Todos.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("não deu pra achar o todo");
    }
    Todos.splice(todoIndex, 1);
    res.json({ message: 'todo deletado com sucesso' });
};
exports.deleteTodo = deleteTodo;
