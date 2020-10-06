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
    setGuessedLetters([]);
    setMovie(null);
    setMovieHistory([]);
  };

  const doubleLetterCheck = letter => {
    // checks to see if same key pressed twice
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    }
  };

  return (
    <div>
      {score === null && <Instructions clickHandler={startGame} />}

      {score === 0 && guessedLetters.length < 6 && (
        <Game
          movie={movie}
          setMovie={setMovie}
          movieHistory={movieHistory}
          setMovieHistory={setMovieHistory}
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
          doubleLetterCheck={doubleLetterCheck}
        />
      )}

      {guessedLetters.length >= 6 && (
        <GameOver movieHistory={movieHistory} clickHandler={startGame} />
      )}
    </div>
  );
}

export default Container;
