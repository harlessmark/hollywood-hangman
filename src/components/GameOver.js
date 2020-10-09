import React from "react";
import { interjection, adjective, slur, insultingSentence } from "../insults";
import { useDispatch, useSelector } from "react-redux";

const TotallyRandom = require("totally-random");
const random = new TotallyRandom();

function GameOver() {
  const dispatch = useDispatch();

  // gets all movies played across all games
  const movies = useSelector(state => state.movies);
  // displays movie data on screen
  let id = 0;
  const movie = movies.map(movie => {
    id++;
    return <li key={id}>{movie.title}</li>;
  });

  const scoreSentence = () => {
    if (movies.length - 1 === 0) {
      return "you didn't even get one correct";
    } else if (movies.length - 1 === 1) {
      return "you only got 1 movie correct";
    } else {
      return `you only got ${movies.length - 1} correct`;
    }
  };

  const playAgain = () => {
    dispatch({ type: "START_GAME" });
    dispatch({ type: "CLEAR_LETTERS" });
    dispatch({ type: "GAME_OVER" });
    dispatch({ type: "ADD_MOVIES" });
  };

  return (
    <div>
      <h1>Game Over</h1>

      <p>
        {interjection()}, {scoreSentence()}! {insultingSentence()}, {slur()}!
        Even your mom managed to get {random.to(5) + movies.length - 1} right
        when we played last night, ha!
      </p>

      {random.boolean() && (
        <p>
          Consider{" "}
          <a
            href='https://buymeacoffee.com/2spacemilk'
            target='_blank'
            rel='noopener noreferrer'>
            buying me a coffee
          </a>{" "}
          if you enjoyed playing Hollywood Hangman. Even someone as{" "}
          {adjective()} as you must have at least one redeeming quality. Isn't
          that right, {slur()}?
        </p>
      )}

      <ol>{movie}</ol>

      <button onClick={playAgain}>Play Again?</button>
    </div>
  );
}

export default GameOver;
