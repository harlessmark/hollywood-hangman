export default (state = null, { type }) => {
  if (type === "START_GAME") {
    return 0;
  } else if (type === "ADD_SCORE") {
    return state++;
  } else return state;
};
