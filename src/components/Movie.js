import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

import { useDispatch, useSelector } from "react-redux";

function Movie() {
  const dispatch = useDispatch();
  const letters = useSelector(state => state.letterReducer);
  const movie = useSelector(
    state => state.movieReducer[state.movieReducer.length - 1]
  );

  const censorTitle = () => {
    // blanks out movie title
    return movie?.title.replace(/[a-z]/gi, "_");
  };

  const censorPlot = () => {
    // blanks movie name from plot
    const blanks = "_".repeat(movie?.title.length);
    const re = new RegExp(movie?.title, "gi");

    return movie?.plot.replace(re, blanks);
  };

  const letterCheck = letter => {
    // checks if letter has already been entered
    // dispatches if not
    if (!letters.includes(letter)) {
      dispatch({ type: "ADD_LETTER", letter });
    }
  };

  return (
    <div>
      <p className='blank-movie'>
        {censorTitle()} ({movie?.year})
      </p>
      <p>Title: {movie?.title}</p>
      <p>Actors: {movie?.actors}</p>
      <p>Director: {movie?.director}</p>
      <p>{censorPlot()}</p>

      <KeyboardEventHandler
        handleKeys={[..."qwertyuiopasdfghjklzxcvbnm"]}
        onKeyEvent={letter => letterCheck(letter)}
      />
    </div>
  );
}

export default Movie;