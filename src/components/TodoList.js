import React from "react";

import Todo from "./Todo";

function TodoList({ todos, toggleCompleted }) {
  return todos.map((todo) => (
    <Todo todo={todo} toggleCompleted={toggleCompleted} />
  ));
}

export default TodoList;
