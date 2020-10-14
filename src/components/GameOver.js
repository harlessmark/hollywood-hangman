import React from "react";
// import About from "./About";
import { interjection, slur, insultingSentence } from "../insults";
import { useDispatch, useSelector } from "react-redux";

const TotallyRandom = require("totally-random");
const random = new TotallyRandom();

function GameOver() {
  const dispatch = useDispatch();
  const { moviesPlayed } = useSelector(state => state.game);

  const scoreSentence = () => {
    if (moviesPlayed.length - 1 === 0) {
      return "you couldn't even get one correct";
    } else if (moviesPlayed.length - 1 === 1) {
      return "you only got 1 movie correct";
    } else {
      return `you only got ${moviesPlayed.length - 1} correct`;
    }
  };

  const dialogue = `${interjection()}, ${scoreSentence()}! ${insultingSentence()}, you SLUR! Even
  your mom managed to get ${random.to(5) + moviesPlayed.length - 1} right
  when we played last night, ha!`;

  const splitDialogue = () => {
    const firstText = dialogue.split("SLUR")[0];
    const secondText = dialogue.split("SLUR")[1];

    return (
      <div>
        {firstText}
        <span className='slur'>{slur()}</span>
        {secondText}
      </div>
    );
  };

  // displays movie data on screen
  let id = 0;
  const movieList = moviesPlayed.map(movie => {
    const lastMovie = moviesPlayed[moviesPlayed.length - 1].imdbID;
    id++;

    if (movie.imdbID === lastMovie) {
      return (
        <li key={id} style={{ textDecoration: "line-through" }}>
          {movie.Title}
        </li>
      );
    } else return <li key={id}>{movie.Title}</li>;
  });

  const playAgain = () => {
    dispatch({ type: "INITIAL_STATE_GAME" });
    dispatch({ type: "INITIAL_STATE_MOVIE" });
    dispatch({ type: "START_GAME" });
  };

  return (
    <div>
      <h1>Game Over</h1>

      <p>{splitDialogue()}</p>

      <ol>{movieList}</ol>

      {/* {random.boolean() && (
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
      )} */}

      {/* <button>About</button> */}
      <button onClick={playAgain}>Play Again?</button>

      {/* <About /> */}
    </div>
  );
}

export default GameOver;
