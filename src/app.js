import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import Moment from "moment";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Search from "./components/Search";

import actions from "./actions";

import { initialState, todoReducer } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const onSubmit = (newTodo) => {
    const todo = {
      id: new Date().getTime(),
      todo: newTodo.todo,
      completed: false,
      timeOfCompletion: null,
      completedBy: Moment(newTodo.completedBy).format("LLL"),
      tags: newTodo.tags,
    };
    // dispatch({ type: "ADD", payload: todo });
    dispatch(actions.addTodo(todo))
  };

  const toggleCompleted = (id) => {
    // dispatch({ type: "TOGGLE", payload: id });
    dispatch(actions.toggleTodo(id))
  };

  const clearCompleted = () => {
    // dispatch({ type: "CLEAR", payload: null });
    dispatch(actions.clearTodos())
  };

  const search = (searchTerm) => {
    // dispatch({ type: "SEARCH", payload: searchTerm });
    dispatch(actions.searchTodos(searchTerm))
  };

  return (
    <div className="app">
      <Search search={search} />
      <TodoList todos={state} toggleCompleted={toggleCompleted} />
      <TodoForm onSubmit={onSubmit} />
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
