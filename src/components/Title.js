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
    <h1 className='blank-movie' style={{ color: "#f25042" }}>
      <b>
        {movie?.displayTitle} {movie?.data?.year}
      </b>
    </h1>
  );
}

export default Title;
