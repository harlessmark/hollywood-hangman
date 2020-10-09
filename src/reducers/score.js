export default (state = null, { type }) => {
  if (type === "START_GAME") {
    return 0;
  } else if (type === "CORRECT") {
    return state++;
  } else return state;
};
