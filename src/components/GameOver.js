import React from "react";

import { useDispatch, useSelector } from "react-redux";

function GameOver() {
  const movies = useSelector(state => state.movieReducer);
  const dispatch = useDispatch();

  const playAgain = () => {
    dispatch({ type: "PLAY_AGAIN" });
  };

  return (
    <div>
      <h1>Game Over</h1>
      <ol>
        {movies.map(movie => (
          <li>{movie.title}</li>
        ))}
      </ol>
      <button onClick={playAgain}>Play Again?</button>
    </div>
  );
}

export default GameOver;
