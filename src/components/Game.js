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

// import React, { useEffect } from "react";
// import movie_data from "../data/movie_data.json";
// import { useDispatch, useSelector } from "react-redux";
// import Movie from "./Movie";

// const TotallyRandom = require("totally-random");

// export default function Game() {
//   const dispatch = useDispatch();
//   const { moviesPlayed } = useSelector(state => state.game);

//   useEffect(() => {
//     // gets random movie
//     const random = new TotallyRandom();
//     // const randomMovie = random.array(movie_data);
//     let randomMovie;
//     let notUnique;

//     do {
//       randomMovie = random.array(movie_data);
//       notUnique = false;

//       for (const moviePlayed of moviesPlayed) {
//         if (moviePlayed.imdbID === randomMovie.imdbID) {
//           notUnique = true;
//         }
//       }
//     } while (notUnique);

//     debugger;

//     // wraps year in () for smoother rendering
//     randomMovie.Year = `(${randomMovie.Year})`;

//     // removes title from plot
//     const blanks = "_".repeat(randomMovie.Title.length);
//     const re = new RegExp(randomMovie.Title, "gi");
//     randomMovie.Plot = randomMovie.Plot.replace(re, blanks);

//     dispatch({ type: "ADD_MOVIE", randomMovie });
//     dispatch({ type: "ADD_TO_MOVIES_PLAYED", randomMovie });
//   }, [dispatch, moviesPlayed]);

//   return <Movie />;
// }
