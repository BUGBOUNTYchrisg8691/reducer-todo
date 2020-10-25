export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.concat(action.payoad);
    case "TOGGLE":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case "CLEAR":
      return state.filter((todo) => {
        !todo.completed;
      });
    default:
      return state;
  }
};
