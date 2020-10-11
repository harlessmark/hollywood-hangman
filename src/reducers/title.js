const initialState = {
  title: "",
  displayTitle: "",
  letters: [],
  score: 0,
};

export default (state = initialState, { type, title, letter }) => {
  if (type === "ADD_TITLE") {
    // const displayTitle = title.replace(/[a-z]/gi, "_");
    // return { ...state, title, displayTitle };
  } else if (type === "CORRECT_GUESS") {
    // state.letters = [...state.letters, letter];
    // const re = new RegExp(`[^${state.letters.join("")}\\s\\W]`, "gi");
    // state.displayTitle = state.title.replace(re, "_");
    // return { ...state, displayTitle: state.title.replace(re, "_") };
  } else if (type === "CLEAR_GUESSES") {
    return initialState;
  } else return state;
};
