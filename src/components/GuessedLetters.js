import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Letter = styled.span`
  color: #f25042;
  font-weight: bold;
`;

const Letters = styled.span`
  font-weight: bold;
  letter-spacing: 3px;
`;

export default function GuessedLetters() {
  const movie = useSelector(state => state.movie);

  let id = 0;
  const mappedLetters = movie.letters.map(letter => {
    if (movie.data.title.toLowerCase().includes(letter)) {
      return <span key={++id}>{letter}</span>;
    } else return <Letter key={++id}>{letter}</Letter>;
  });

  return <Letters>{mappedLetters}</Letters>;
}
