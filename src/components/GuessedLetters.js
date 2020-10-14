import React from "react";
import { useSelector } from "react-redux";

function GuessedLetters() {
  const movie = useSelector(state => state.movie);
  const mappedLetters = movie.letters.map(letter => {
    if (movie.data.title.toLowerCase().includes(letter)) {
      return letter;
    } else return <span className='wrong-letter'>{letter}</span>;
  });

  return (
    <p>
      guessed letters: <span className='guessed-letters'>{mappedLetters}</span>
    </p>
  );
}

export default GuessedLetters;
