import React, { useEffect } from "react";
import { insultSentence } from "../insults";
import { useDispatch, useSelector } from "react-redux";

const TotallyRandom = require("totally-random");

function GameOver() {
  const random = new TotallyRandom();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GAME_OVER" });
  }, []);

  // gets all movies played across all games
  const allMovies = useSelector(state => state.movieReducer);

  // gets most recent gameID
  const recentGameID = allMovies[allMovies.length - 1].gameID;

  // filters by most recent gameID
  const filteredMovies = allMovies.filter(
    movie => movie.gameID === recentGameID
  );

  // displays movie data on screen
  const movie = filteredMovies.map(movie => <li>{movie.title}</li>);

  const playAgain = () => {
    dispatch({ type: "START_GAME" });
    dispatch({ type: "CLEAR_LETTERS" });
    dispatch({ type: "ADD_MOVIES" });
  };

  return (
    <div>
      <h1>Game Over</h1>
      <p>
        {insultSentence()}You got x movies correct. I think my personal best is
        (random.to(5) + x){" "}
      </p>
      <ol>{movie}</ol>
      <button onClick={playAgain}>Play Again?</button>
    </div>
  );
}

export default GameOver;
