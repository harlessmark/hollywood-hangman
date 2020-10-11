const initialState = [];

export default (state = initialState, action) => {
  const { type, movie } = action;

  if (type === "ADD_MOVIE") {
    const {
      imdbID,
      Actors,
      Director,
      Genre,
      Plot,
      Poster,
      Title,
      Year,
    } = movie;

    return [
      ...state,
      {
        imdbID,
        actors: Actors,
        director: Director,
        genre: Genre,
        plot: Plot,
        poster: Poster,
        title: Title,
        year: Year,
      },
    ];
  } else if (type === "GAME_OVER") {
    return initialState;
  } else return state;
};
