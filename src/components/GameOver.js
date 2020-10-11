import React from "react";
import About from "./About";
import { interjection, adjective, slur, insultingSentence } from "../insults";
import { useDispatch, useSelector } from "react-redux";

const TotallyRandom = require("totally-random");
const random = new TotallyRandom();

function GameOver() {
  const dispatch = useDispatch();
  const { moviesPlayed } = useSelector(state => state.game);

  // displays movie data on screen
  let id = 0;
  const movie = moviesPlayed.map(movie => {
    const lastMovie = moviesPlayed[moviesPlayed.length - 1].imdbID;
    id++;

    if (moviesPlayed.imdbID === lastMovie) {
      return (
        <li key={id} style={{ textDecoration: "line-through" }}>
          {moviesPlayed.title}
        </li>
      );
    } else return <li key={id}>{moviesPlayed.title}</li>;
  });

  const scoreSentence = () => {
    if (moviesPlayed.length - 1 === 0) {
      return "you couldn't even get one correct";
    } else if (moviesPlayed.length - 1 === 1) {
      return "you only got 1 movie correct";
    } else {
      return `you only got ${moviesPlayed.length - 1} correct`;
    }
  };

  const playAgain = () => {
    // dispatch({ type: "START_GAME" });
    // dispatch({ type: "CLEAR_LETTERS" });
    // dispatch({ type: "GAME_OVER" });
    // dispatch({ type: "CLEAR_GUESSES" });
    // dispatch({ type: "ADD_MOVIES" });
  };

  return (
    <div>
      <h1>Game Over</h1>

      {/*  <p>
        {interjection()}, {scoreSentence()}! {insultingSentence()}, {slur()}!
        Even your mom managed to get {random.to(5) + moviesPlayed.length - 1}{" "}
        right when we played last night, ha!
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
          {adjective()} as you must have at least one redeeming quality. Or am I
          wrong, {slur()}?
        </p>
      )}

      <ol>{moviesPlayed}</ol>

      <button>About</button>
      <button onClick={playAgain}>Play Again?</button>

      <About /> */}
    </div>
  );
}

export default GameOver;
