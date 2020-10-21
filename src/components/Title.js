import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const H2 = styled.h2`
  color: #020826;
  text-align: center;
  letter-spacing: 2px;
  font-family: "Roboto Mono", monospace;
`;

function Title() {
  const movie = useSelector(state => state.movie);
  const dispatch = useDispatch();

  if (
    movie?.displayTitle === movie?.data?.title &&
    movie?.gotCorrect === false
  ) {
    dispatch({ type: "INCREMENT_SCORE" });
    dispatch({ type: "GOT_CORRECT" });

    setTimeout(() => {
      dispatch({ type: "INITIAL_STATE_MOVIE" });
    }, 3500);
  }

  return (
    <H2>
      {movie?.displayTitle} {movie?.data?.year}
    </H2>
  );
}

export default Title;
