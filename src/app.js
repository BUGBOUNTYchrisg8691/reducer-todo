import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  //const [todos, setTodos] = useState([]);

  const onSubmit = (newTodo) => {
    const todo = {
      id: new Date().getTime(),
      todo: newTodo.todo,
      completed: false,
    };
    setTodos([...todos, todo]);
  };

  const toggleCompleted = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="app">
      <TodoList todos={todos} toggleCompleted={toggleCompleted} />
      <TodoForm onSubmit={onSubmit} />
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
