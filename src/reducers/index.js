export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.payload);
    case "TOGGLE":
      return state.find((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case "CLEAR":
      return state.filter((todo) => {
        if (todo.completed) {
          return !todo.completed;
        } else {
          return todo.completed;
        }
      });
    default:
      return state;
  }
};
