import React from "react";
import { useSelector } from "react-redux";

function GuessedLetters() {
  const { letters } = useSelector(state => state.movie);
  const mappedLetters = letters.map(letter => {
    return `${letter} `;
  });

  return <p>guessed letters: {mappedLetters}</p>;
}

export default GuessedLetters;
