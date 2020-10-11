let initialState = {
  data: null,
  displayTitle: null,
  letters: [],
  tries: 6,
};

export default (state = initialState, action) => {
  const { type, data, letter, tries } = action;

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

  if (type === "ADD_LETTER") {
    state.letters = [...state.letters, letter];
    const re = new RegExp(`[^${state.letters.join("")}\\s\\W]`, "gi");
    state.displayTitle = state.data.title.replace(re, "_");

    return { ...state };
  }

  if (type === "DECREMENT_TRIES") {
    state.tries -= 1;
    return { ...state };
  }

  if (type === "GAME_OVER") return initialState;

  return state;
};
