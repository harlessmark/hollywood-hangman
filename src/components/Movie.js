import React from "react";
import Title from "./Title";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { useDispatch, useSelector } from "react-redux";

function Movie() {
  const dispatch = useDispatch();
  const { letters } = useSelector(state => state.movie);
  const { data } = useSelector(state => state.movie);

  const letterCheck = letter => {
    // checks if letter has already been entered
    if (!letters.includes(letter)) {
      dispatch({ type: "ADD_LETTER", letter });

      const re = new RegExp(`${letter}`, "gi");
      if (re.test(data.title)) {
        // "tries" remains same if letter is in title
        dispatch({ type: "CORRECT_GUESS", letter });
      } else {
        // tries-- if letter is not in title
        dispatch({ type: "DECREMENT_TRIES" });
      }
    }
  };

  return (
    <div>
      <Title />

      {/* <p>{data?.title}</p> */}
      <p>{data?.plot}</p>
      <p>Actors: {data?.actors}</p>
      <p>Director: {data?.director}</p>
      <p style={{ color: "rgba(0,0,0,.3)" }}>dev use: {data?.imdbID}</p>

      <KeyboardEventHandler
        handleKeys={[..."qwertyuiopasdfghjklzxcvbnm"]}
        onKeyEvent={letter => letterCheck(letter)}
      />
    </div>
  );
}

export default Movie;
