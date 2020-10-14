const initialState = {
  moviesPlayed: [],
  score: null,
};

export default (state = initialState, { type, randomMovie }) => {
  if (type === "START_GAME") return { ...state, score: 0 };

  if (type === "ADD_TO_MOVIES_PLAYED") {
    state.moviesPlayed = [...state.moviesPlayed, randomMovie];
    return { ...state };
  }

  if (type === "INCREMENT_SCORE") {
    state.score += 1;
    return { ...state };
  }

  if (type === "INITIAL_STATE_GAME") return initialState;

  return state;
};
