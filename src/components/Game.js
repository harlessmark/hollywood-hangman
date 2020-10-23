import React, { useEffect } from "react";
import movie_data from "../data/movie_data.json";
import { useDispatch } from "react-redux";
import Movie from "./Movie";

const TotallyRandom = require("totally-random");

export default function Game() {
  const dispatch = useDispatch();

  useEffect(() => {
    // gets random movie
    const random = new TotallyRandom();
    const randomMovie = random.array(movie_data);

    // wraps year in () for smoother rendering
    randomMovie.Year = `(${randomMovie.Year})`;

    // removes title from plot
    const blanks = "_".repeat(randomMovie.Title.length);
    const re = new RegExp(randomMovie.Title, "gi");
    randomMovie.Plot = randomMovie.Plot.replace(re, blanks);

    dispatch({ type: "ADD_MOVIE", randomMovie });
    dispatch({ type: "ADD_TO_MOVIES_PLAYED", randomMovie });
  }, [dispatch]);

  return <Movie />;
}
