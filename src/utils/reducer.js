import { INSERT_ELEMENT } from './action';

const initialState = {
  elements: [], // Your initial array
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INSERT_ELEMENT:
      return {
        ...state,
        elements: [...state.elements, action.payload], // Insert the new element
      };
    default:
      return state;
  }
}

export default rootReducer;
