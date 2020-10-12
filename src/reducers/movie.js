let initialState = {
  data: null,
  displayTitle: null,
  gotCorrect: false,
  letters: [],
  tries: 6,
};

export default (state = initialState, action) => {
  const { type, data, letter } = action;

  if (type === "ADD_MOVIE") {
    const { imdbID, Actors, Director, Genre, Plot, Poster, Title, Year } = data;
    // censors title
    const displayTitle = Title.replace(/[a-z]/gi, "_");

    return {
      ...state,
      data: {
        imdbID,
        actors: Actors,
        director: Director,
        genre: Genre,
        plot: Plot,
        poster: Poster,
        title: Title,
        year: Year,
      },
      displayTitle,
    };
  }

  if (type === "GOT_CORRECT") {
    state.gotCorrect = !state.gotCorrect;
    return { ...state };
  }

  if (type === "ADD_LETTER") {
    state.letters = [...state.letters, letter];
    const re = new RegExp(`[^${state.letters.join("")}\\d\\s\\W]`, "gi");
    state.displayTitle = state.data.title.replace(re, "_");

    return { ...state };
  }

  if (type === "DECREMENT_TRIES") {
    state.tries -= 1;
    return { ...state };
  }

  if (type === "INITIAL_STATE_MOVIE") return initialState;

  return state;
};
