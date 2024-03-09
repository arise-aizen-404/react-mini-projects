import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import "../App.css";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    // if(!todo.trim()) return;
    if (!todo.task || /^\s*$/.test(todo.task)) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    // console.log(...todos);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.task || /^\s*$/.test(newValue.task)) return;
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) todo.isComplete = !todo.isComplete;
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <>
      <h1>Whats your plan today ?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        className="todo-container"
      />
    </>
  );
};
