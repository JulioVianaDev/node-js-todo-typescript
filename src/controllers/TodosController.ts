import { RequestHandler} from "express"
import {Todo} from '../models/Todo'
const Todos: Todo[] = [];
export const createTodo: RequestHandler = (req,res,next)=>{
  const text = (req.body as {text: string}).text;

  const newTodo= new Todo(
      Math.floor(Math.random() * 100),
      text
  )
  Todos.push(newTodo)
  res.json({message: "Todo criado com sucesso"})
}

export const getTodos: RequestHandler=(req,res)=>{
  res.status(200).json({todos: Todos})
}

export const updateTodo:RequestHandler= (req,res)=>{
  const todoId = Number(req.params.id);
  const updateText = (req.body as {text:string}).text;
  const todoIndex = Todos.findIndex(todo=>todo.id === todoId);

  if(todoIndex<0){
    throw new Error("não deu pra atualizar o todo");
  }
  Todos[todoIndex] = new Todo(Todos[todoIndex].id, updateText);
  res.status(201).json({message: "atualizado com sucesso"})
}

export const deleteTodo:RequestHandler=(req,res)=>{
  const todoId = Number(req.params.id);
  const todoIndex = Todos.findIndex(todo=> todo.id === todoId);
  if(todoIndex<0){
    throw new Error("não deu pra achar o todo");
  }
  Todos.splice(todoIndex,1)
  res.json({message: 'todo deletado com sucesso'})
}