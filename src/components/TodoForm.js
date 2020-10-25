import React, { useState } from "react";

const initialFormValues = {
  todo: "",
};

function TodoForm({ onSubmit }) {
  const [formValues, setFormValues] = useState(initialFormValues);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
    setFormValues(initialFormValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="todo" value={formValues.todo} onChange={onChange} />
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
