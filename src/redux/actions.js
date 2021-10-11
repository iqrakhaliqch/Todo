import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from './actionTypes';

let idTodo = 0;

export const addTodo = task => {
  return {
    type: ADD_TODO,
    payload: {
      id: ++idTodo,
      task,
    },
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

export const updateTodo = (id, task) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id: id,
      task: task,
    },
  };
};
