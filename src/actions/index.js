export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const CLEAR = "CLEAR";
export const SEARCH = "SEARCH";

function addTodo(todo) {
  return { type: ADD, payload: todo }
}

function toggleTodo(id) {
  return { type: TOGGLE, payload: id }
}

function clearTodos() {
  return { type: CLEAR }
}

function searchTodos(searchTerm) {
  return { type: SEARCH, payload: searchTerm }
}

export default {
  addTodo,
  toggleTodo,
  clearTodos,
  searchTodos
}