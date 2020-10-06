import React, { useState } from "react";

import Instructions from "./Instructions";
import Game from "./Game";
import GameOver from "./GameOver";

function Container() {
  // ! useState(null) in production
  const [score, setScore] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [movie, setMovie] = useState(null);
  const [movieHistory, setMovieHistory] = useState([]);

  const startGame = () => {
    // starts game
    setScore(0);
  };

  return (
    <div>
      {score === null && <Instructions clickHandler={startGame} />}

      {guessedLetters.length < 6 && (
        <Game
          movie={movie}
          setMovie={setMovie}
          movieHistory={movieHistory}
          setMovieHistory={setMovieHistory}
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
        />
      )}

      {guessedLetters.length >= 6 && <GameOver />}
    </div>
  );
}

export default Container;
