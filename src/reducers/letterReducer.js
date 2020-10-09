export default (state = [], { type, letter }) => {
  if (type === "ADD_LETTER") {
    return [...state, letter];
  } else if (type === "CLEAR_LETTERS") {
    return [];
  } else return state;
};
