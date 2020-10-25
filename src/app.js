import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./reducers";

function App() {
  //const [todos, setTodos] = useState([]);
  const [state, dispatch] = useReducer(initialState);

  const onSubmit = (newTodo) => {
    const todo = {
      id: new Date().getTime(),
      todo: newTodo.todo,
      completed: false,
    };
    dispatch({ type: "ADD", payload: todo });
    //setTodos([...todos, todo]);
  };

  const toggleCompleted = (id) => {
    const newTodos = [...state];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    dispatch({ type: "TOGGLE", payload: id });
    //setTodos(newTodos);
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR", payload: null });
    //setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="app">
      <TodoList toggleCompleted={toggleCompleted} />
      <TodoForm onSubmit={onSubmit} />
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
