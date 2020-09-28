import * as types from '../constants/ActionTypes'

export const addTodo = function(text) {
  return { type: types.ADD_TODO, text };
}

export const deleteTodo = function(id) {
  return { type: types.DELETE_TODO, id };
}

export const editTodo = function(id, text) {
  return { type: types.EDIT_TODO, id, text };
}

export const completeTodo = function(id) {
  return { type: types.COMPLETE_TODO, id };
}

export const completeAllTodos = function() {
  return { type: types.COMPLETE_ALL_TODOS };
}

export const clearCompleted = function() {
  return { type: types.CLEAR_COMPLETED };
}
