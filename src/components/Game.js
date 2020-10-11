import React, { useEffect } from "react";
import Movie from "./Movie";
import TriesLeft from "./TriesLeft";
import GuessedLetters from "./GuessedLetters";

import { fetchMovie } from "../utils";
import { useDispatch } from "react-redux";

function Game() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovie = async () => {
      const movie = await fetchMovie();

      // ! wraps year in () for smoother rendering
      movie.Year = `(${movie.Year})`;

      // ! removes title from plot
      const blanks = "_".repeat(movie.Title.length);
      const re = new RegExp(movie.Title, "gi");
      movie.Plot = movie.Plot.replace(re, blanks);

      dispatch({ type: "ADD_MOVIE", movie });

      const title = await movie.Title;
      dispatch({ type: "ADD_TITLE", title });
    };

    getMovie();
  }, [dispatch]);

  return (
    <div>
      <TriesLeft />
      <GuessedLetters />
      <Movie />
    </div>
  );
}

export default Game;
