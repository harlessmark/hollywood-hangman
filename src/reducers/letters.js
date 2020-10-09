const initialState = [];

export default (state = initialState, { type, letter }) => {
  if (type === "ADD_LETTER") {
    return [...state, letter];
  } else if (type === "CLEAR_LETTERS") {
    return initialState;
  } else return state;
};
