import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from '../actionTypes';

const initialState = {
  todo: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const {id, task} = action.payload;
      return {
        ...state,
        todo: [...state.todo, {id, task}],
      };
    }
    case DELETE_TODO: {
      const {id} = action.payload;
      return {
        ...state,
        todo: state.todo.filter(todo => todo.id !== id),
      };
    }
    case UPDATE_TODO: {
      const {id, task} = action.payload;
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}
