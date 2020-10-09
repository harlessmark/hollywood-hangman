import React from "react";
import { useSelector } from "react-redux";

function GuessedLetters() {
  const guessedLetters = useSelector(state => state.letterReducer);
  const letters = guessedLetters.map(letter => {
    return `${letter} `;
  });

  return <p>guessed letters: {letters}</p>;
}

export default GuessedLetters;
