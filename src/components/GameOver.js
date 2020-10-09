import React, { useEffect } from "react";
import { insultingSentence } from "../insults";
import { useDispatch, useSelector } from "react-redux";

const TotallyRandom = require("totally-random");
const random = new TotallyRandom();

// TODO strikeout last movie in <li> since they got it wrong

function GameOver() {
  useEffect(() => {
    dispatch({ type: "GAME_OVER" });
  }, []);

  // gets all movies played across all games
  const allMovies = useSelector(state => state.movieReducer);
  // gets most recent gameID
  const recentGameID = allMovies[allMovies.length - 1].gameID;
  // filters by most recent gameID
  const filtered = allMovies.filter(movie => movie.gameID === recentGameID);
  // displays movie data on screen
  const movie = filtered.map(movie => <li>{movie.title}</li>);

  const dispatch = useDispatch();
  const playAgain = () => {
    dispatch({ type: "START_GAME" });
    dispatch({ type: "CLEAR_LETTERS" });
    dispatch({ type: "ADD_MOVIES" });
  };

  return (
    <div>
      <h1>Game Over</h1>

      <p>
        {insultingSentence()} You only got {filtered.length - 1} movies correct.
        I think my personal best is {random.to(5) + filtered.length - 1}, ha!
      </p>

      <ol>{movie}</ol>

      <button onClick={playAgain}>Play Again?</button>
    </div>
  );
}

export default GameOver;
