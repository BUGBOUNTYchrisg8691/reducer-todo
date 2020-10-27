import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./reducers";

const moment = require("moment");

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const onSubmit = (newTodo) => {
    const todo = {
      id: new Date().getTime(),
      todo: newTodo.todo,
      completed: false,
      timeOfCompletion: null,
      completedBy: moment(newTodo.completedBy).format("LLL"),
    };
    dispatch({ type: "ADD", payload: todo });
  };

  const toggleCompleted = (id) => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: "CLEAR", payload: null });
  };

  return (
    <div className="app">
      <TodoList todos={state} toggleCompleted={toggleCompleted} />
      <TodoForm onSubmit={onSubmit} />
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
