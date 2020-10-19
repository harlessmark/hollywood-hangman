import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Title() {
  const movie = useSelector(state => state.movie);
  const dispatch = useDispatch();

  if (
    movie?.displayTitle === movie?.data?.title &&
    movie?.gotCorrect === false
  ) {
    dispatch({ type: "INCREMENT_SCORE" });
    dispatch({ type: "GOT_CORRECT" });
  }

  return (
    <h2 className='blank-title'>
      {movie?.displayTitle} {movie?.data?.year}
    </h2>
  );
}

export default Title;
