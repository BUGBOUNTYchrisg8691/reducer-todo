import React, { useReducer, useState } from "react";
import { initialState, todoReducer } from "../reducers";

function Todo({ todo, toggleCompleted }) {
  const handleToggle = () => {
    toggleCompleted(todo.id);
  };

  return (
    <div className="todo">
      <h3>{todo.todo}</h3>
      {todo.timeOfCompletion && todo.completed && (
        <div>Completed: {todo.timeOfCompletion}</div>
      )}
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        onChange={handleToggle}
      />
    </div>
  );
}

export default Todo;
