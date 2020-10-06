import React, { useState, useEffect } from "react";
import movies from "../movies.json";

// randomly selects movies
const TotallyRandom = require("totally-random");
const random = new TotallyRandom();

function Game(props) {
  const [movie, setMovie] = useState(null);

  const getMovieData = async () => {
    // selects random movie ID
    const movieID = random.array(movies);
    const movieAPI = `http://www.omdbapi.com/?i=${movieID}&apikey=80e59555`;

    // gets movie data
    const movieRes = await fetch(movieAPI);
    const movieData = await movieRes.json();

    // sets movie data
    setMovie(await movieData);
    props.setMovieHistory([...props.movieHistory, await movieData]);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return <div></div>;
}

export default Game;
