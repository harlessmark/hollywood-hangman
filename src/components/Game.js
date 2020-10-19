import React, { useEffect } from "react";
import TriesLeft from "./TriesLeft";
import Score from "./Score";
import Movie from "./Movie";
import Card from "../styled/Card";

import movie_data from "../data/movie_data.json";
import { useDispatch } from "react-redux";
const TotallyRandom = require("totally-random");

function Game() {
  const dispatch = useDispatch();

  useEffect(() => {
    const random = new TotallyRandom();

    // gets random movie
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

  return (
    <div>
      <Card style={{ display: "flex", justifyContent: "space-between" }}>
        <Score />
        <TriesLeft />
      </Card>
      <Movie />
    </div>
  );
}

export default Game;
