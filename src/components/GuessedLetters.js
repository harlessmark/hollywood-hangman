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
        <span key={++id} style={{ color: "#f25042", fontWeight: "bold" }}>
          {letter}
        </span>
      );
  });

  return (
    <span style={{ fontWeight: "bold", letterSpacing: "3px" }}>
      {mappedLetters}
    </span>
  );
}

export default GuessedLetters;
