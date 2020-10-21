import React from "react";
import Mark from "./Mark";
import gameOver from "../assets/gameover.png";
import { interjection, slur, insultingSentence } from "../insults";
import { useDispatch, useSelector } from "react-redux";
import Span from "../styled/Span";
import Div from "../styled/Div";

import Button from "../styled/Button";
import Img from "../styled/Img";

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
    } else return `you only got _num_ correct`;
  };

  const dialogue = `${interjection()}, ${scoreSentence()}! ${insultingSentence()}, you _slur_! Even
  your mom managed to get ${random.to(5) + moviesPlayed.length - 1} right
  when we played last night, ha!`;

  const splitDialogue = () => {
    // splits dialogue to add css styling to score and slur
    const beforeSlur = dialogue.split("_slur_")[0];
    const afterSlur = dialogue.split("_slur_")[1];

    if (scoreSentence().includes("_any_")) {
      const beforeSplit = beforeSlur.split("_any_")[0];
      const afterSplit = beforeSlur.split("_any_")[1];

      return (
        <>
          {beforeSplit}
          <Span score>any</Span>
          {afterSplit}
          <Span>{slur()}</Span>
          {afterSlur}
        </>
      );
    } else if (scoreSentence().includes("_one_")) {
      const beforeSplit = beforeSlur.split("_one_")[0];
      const afterSplit = beforeSlur.split("_one_")[1];

      return (
        <>
          {beforeSplit}
          <Span score>one</Span>
          {afterSplit}
          <Span>{slur()}</Span>
          {afterSlur}
        </>
      );
    } else {
      const beforeSplit = beforeSlur.split("_num_")[0];
      const afterSplit = beforeSlur.split("_num_")[1];

      return (
        <div>
          {beforeSplit}
          <Span score>{moviesPlayed.length - 1}</Span>
          {afterSplit}
          <Span>{slur()}</Span>
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
      <Img src={gameOver} alt='game over' />

      <Mark
        status={"Remains uncontested"}
        dialogue={splitDialogue()}
        movieList={movieList}
      />

      <Div flexEnd>
        <a
          href='https://buymeacoffee.com/2spacemilk'
          target='_blank'
          rel='noopener noreferrer'>
          <Button leftButton>Buy Me a Coffee</Button>
        </a>

        <Button onClick={playAgain}>Try Again?</Button>
      </Div>
    </div>
  );
}

export default GameOver;
