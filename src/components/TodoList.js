import React, { useReducer } from "react";

import Todo from "./Todo";

function TodoList({ toggleCompleted }) {
  return todos.map((todo) => (
    <Todo todo={todo} toggleCompleted={toggleCompleted} />
  ));
}

export default TodoList;
