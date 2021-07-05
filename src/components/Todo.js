import React from "react";

const moment = require("moment");

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
      {/*{todo.completedBy < moment(new Date()).format("LLL") &&
      !todo.completed ? (
        <div style="{color: red}">Overdue</div>
      ) : null}*/}
    </div>
  );
}

export default Todo;
