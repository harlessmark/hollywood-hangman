import React from "react";
import Title from "./Title";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { useDispatch, useSelector } from "react-redux";

function Movie() {
  const letters = useSelector(state => state.letters);
  const movie = useSelector(state => state.movies[state.movies.length - 1]);
  const dispatch = useDispatch();

  const letterCheck = letter => {
    // checks if letter has already been entered
    if (!letters.includes(letter)) {
      dispatch({ type: "ADD_LETTER", letter });
      dispatch({ type: "CORRECT_GUESS", letter });
    }
  };

  return (
    <div>
      <Title title={movie?.title} year={movie?.year} />

      <p>{movie?.title}</p>
      <p>Actors: {movie?.actors}</p>
      <p>Director: {movie?.director}</p>
      <p>{movie?.plot}</p>

      <KeyboardEventHandler
        handleKeys={[..."qwertyuiopasdfghjklzxcvbnm"]}
        onKeyEvent={letter => letterCheck(letter)}
      />
    </div>
  );
}

export default Movie;

// const re = new RegExp('e', "gi");

// console.log(title.replace(re, "_"));
// return title.replace(re, "_");
