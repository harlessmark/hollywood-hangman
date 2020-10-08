let gameID = 0;

export default (state = [], action) => {
  const { type, payload } = action;

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
    } = payload;

    return [
      ...state,
      {
        gameID,
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
    // all movies in current game
    const filtered = state.filter(game => game.gameID === gameID);
    gameID++;

    return filtered;
  } else return state;
};
