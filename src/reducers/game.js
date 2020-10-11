const initialState = {
  moviesPlayed: [],
  score: null,
};

export default (state = initialState, { type }) => {
  if (type === "INIT_GAME") return { ...state, score: 0 };

  return state;
};
