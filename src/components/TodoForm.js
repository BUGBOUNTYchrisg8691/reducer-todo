import React, { useState } from "react";

const initialFormValues = {
  todo: "",
  completedBy: "",
  housework: false,
  coding: false,
  goals: false,
  shopping: false,
};

const tags = ["housework", "coding", "goals", "shopping"];

function TodoForm({ onSubmit }) {
  const [formValues, setFormValues] = useState(initialFormValues);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormValues({
      ...formValues,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      todo: formValues.todo,
      completedBy: formValues.completedBy,
      tags: tags.filter((item) => formValues[item]),
    };
    onSubmit(newTodo);
    setFormValues(initialFormValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      Todo
      <input name="todo" value={formValues.todo} onChange={onChange} />
      Completed By
      <input
        name="completedBy"
        value={formValues.completedBy}
        onChange={onChange}
      />
      Housework
      <input
        type="checkbox"
        name="housework"
        checked={formValues.housework}
        onChange={onChange}
      />
      Coding
      <input
        type="checkbox"
        name="coding"
        checked={formValues.coding}
        onChange={onChange}
      />
      Goals
      <input
        type="checkbox"
        name="goals"
        value={formValues.goals}
        onChange={onChange}
      />
      Shopping
      <input
        type="checkbox"
        name="shopping"
        value={formValues.shopping}
        onChange={onChange}
      />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
