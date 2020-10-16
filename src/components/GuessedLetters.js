import React from "react";
import { useSelector } from "react-redux";

function GuessedLetters() {
  const movie = useSelector(state => state.movie);

  let id = 0;
  const mappedLetters = movie.letters.map(letter => {
    if (movie.data.title.toLowerCase().includes(letter)) {
      return <span key={++id}>{letter}</span>;
    } else
      return (
        <span className='wrong-letter' key={++id}>
          {letter}
        </span>
      );
  });

  return (
    <p>
      guessed letters: <span className='guessed-letters'>{mappedLetters}</span>
    </p>
  );
}

export default GuessedLetters;
