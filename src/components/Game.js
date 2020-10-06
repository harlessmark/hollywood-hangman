import React, { useEffect } from "react";
import movies from "../movies.json";
import Movie from "./Movie";
import KeyListener from "./KeyListener";

const TotallyRandom = require("totally-random");
const random = new TotallyRandom();

function Game(props) {
  const getMovieData = async () => {
    // gets random movie ID
    const movieID = random.array(movies);
    const movieAPI = `http://www.omdbapi.com/?i=${movieID}&apikey=80e59555&plot=full`;

    // gets movie data
    const movieRes = await fetch(movieAPI);
    const movieData = await movieRes.json();

    // sets movie data
    props.setMovie(await movieData);
    props.setMovieHistory([...props.movieHistory, await movieData]);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      {props.movie && <Movie movie={props.movie} />}
      {props.movie && (
        <KeyListener
          guessedLetters={props.guessedLetters}
          setGuessedLetters={props.setGuessedLetters}
          doubleLetterCheck={props.doubleLetterCheck}
        />
      )}
    </div>
  );
}

export default Game;
