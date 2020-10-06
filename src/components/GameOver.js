import React from "react";

function GameOver(props) {
  return (
    <div>
      <h1>Game Over</h1>
      <ol>
        {props.movieHistory.map(movie => (
          <li>{movie.Title}</li>
        ))}
      </ol>
      <button onClick={props.clickHandler}>Play Again?</button>
    </div>
  );
}

export default GameOver;
