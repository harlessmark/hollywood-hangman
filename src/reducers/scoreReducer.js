export default (state = null, { type }) => {
  if (type === "START_GAME") {
    return state + 1;
  } else if (type === "CORRECT") {
    return state++;
  } else if (type === "PLAY_AGAIN") {
    return (state = 0);
  } else return state;
};
