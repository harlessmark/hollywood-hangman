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
      return "you didn't get _any_ correct";
    } else if (moviesPlayed.length - 1 === 1) {
      return "you only got _one_ movie correct";
    } else {
      return `you only got _num_ correct`;
    }
  };

  const dialogue = `${interjection()}, ${scoreSentence()}! ${insultingSentence()}, you _slur_! Even
  your mom managed to get ${random.to(5) + moviesPlayed.length - 1} right
  when we played last night, ha!`;

  const splitDialogue = () => {
    // splits dialogue to add css styling to score and slur
    const beforeSlur = dialogue.split("slur")[0];
    const afterSlur = dialogue.split("slur")[1];

    if (scoreSentence().includes("_any_")) {
      const beforeSplit = beforeSlur.split("_any_")[0];
      const afterSplit = beforeSlur.split("_any_")[1];

      return (
        <div>
          {beforeSplit}
          <span className='final-score'>any</span>
          {afterSplit}
          <span className='slur'>{slur()}</span>
          {afterSlur}
        </div>
      );
    } else if (scoreSentence().includes("_one_")) {
      const beforeSplit = beforeSlur.split("_one_")[0];
      const afterSplit = beforeSlur.split("_one_")[1];

      return (
        <div>
          {beforeSplit}
          <span className='final-score'>one</span>
          {afterSplit}
          <span className='slur'>{slur()}</span>
          {afterSlur}
        </div>
      );
    } else {
      const beforeSplit = beforeSlur.split("_num_")[0];
      const afterSplit = beforeSlur.split("_num_")[1];

      return (
        <div>
          {beforeSplit}
          <span className='final-score'>{moviesPlayed.length - 1}</span>
          {afterSplit}
          <span className='slur'>{slur()}</span>
          {afterSlur}
        </div>
      );
    }
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

      <a
        href='https://buymeacoffee.com/2spacemilk'
        target='_blank'
        rel='noopener noreferrer'>
        <button> Buy Me a Coffee</button>
      </a>
      <button onClick={playAgain}>Play Again?</button>

      {/* <About /> */}
    </div>
  );
}

export default GameOver;
