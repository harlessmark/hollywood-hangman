import React, { useEffect } from "react";
import TriesLeft from "./TriesLeft";
import GuessedLetters from "./GuessedLetters";
import Score from "./Score";
import Movie from "./Movie";

import { fetchMovie } from "../utils";
import { useDispatch } from "react-redux";

function Game() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovie();
      // wraps year in () for smoother rendering
      data.Year = `(${data.Year})`;

      // removes title from plot
      const blanks = "_".repeat(data.Title.length);
      const re = new RegExp(data.Title, "gi");
      data.Plot = data.Plot.replace(re, blanks);

      dispatch({ type: "ADD_MOVIE", data });
      dispatch({ type: "ADD_TO_MOVIES_PLAYED", data });
    };

    getMovie();
  }, [dispatch]);

  return (
    <div>
      <Score />
      <TriesLeft />
      <GuessedLetters />
      <Movie />
    </div>
  );
}

export default Game;
