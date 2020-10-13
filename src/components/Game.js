import React, { useEffect } from "react";
import TriesLeft from "./TriesLeft";
import GuessedLetters from "./GuessedLetters";
import Score from "./Score";
import Movie from "./Movie";

import movies from "../data/all_movies.json";
import { useDispatch } from "react-redux";
const TotallyRandom = require("totally-random");

function Game() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovie = async () => {
      const random = new TotallyRandom();

      // gets random movie ID
      const movieID = random.array(movies);
      const movieAPI = `https://www.omdbapi.com/?i=${movieID}&apikey=80e59555`;
      // const movieAPI = `http://www.omdbapi.com/?i=tt0094625&apikey=80e59555`;

      try {
        const res = await fetch(movieAPI);
        const data = await res.json();

        // wraps year in () for smoother rendering
        data.Year = `(${data.Year})`;

        // removes title from plot
        const blanks = "_".repeat(data.Title.length);
        const re = new RegExp(data.Title, "gi");
        data.Plot = data.Plot.replace(re, blanks);

        dispatch({ type: "ADD_MOVIE", data });
        dispatch({ type: "ADD_TO_MOVIES_PLAYED", data });
      } catch (error) {
        // TODO display error message
        console.log(error);
      }
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
