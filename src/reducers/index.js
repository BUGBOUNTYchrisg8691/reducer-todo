import Moment from "moment";

import {
  ADD,
  TOGGLE,
  CLEAR,
  SEARCH
} from "./../actions"

export const initialState = [
  {
    todo: "Learn about reducers",
    completed: false,
    id: 3892987589,
    timeOfCompletion: null,
    completedBy: Moment("2020-12-12 12:00:00").format("LLL"),
    tags: ["coding"],
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return state.concat(action.payload);
    case TOGGLE:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
            timeOfCompletion: !todo.completed ? Moment().format("LLL") : null,
          };
        } else {
          return todo;
        }
      });
    case CLEAR:
      return state.filter((todo) => !todo.completed);
    case SEARCH:
      return state.filter((todo) => todo.tags.includes(action.payload));
    default:
      return state;
  }
};
