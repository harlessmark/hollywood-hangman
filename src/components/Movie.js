import React from "react";

function Movie({ movie }) {
  const blankMovieTitle = () => {
    // blanks out movie title
    return movie.Title.replace(/[a-z]/gi, "_");
  };

  const blankMovieFromPlot = () => {
    // removes movie name from plot
    const blanks = "_".repeat(movie.Title.length);
    const re = new RegExp(movie.Title, "gi");

    return movie.Plot.replace(re, blanks);
  };

  return (
    <div>
      <p className='blank-movie'>
        {blankMovieTitle()} ({movie.Year})
      </p>
      <p>{movie.Title}</p>
      <p>{movie.Genre}</p>
      <p>{movie.Actors}</p>
      <p>{movie.Director}</p>
      <p>{blankMovieFromPlot()}</p>
    </div>
  );
}

export default Movie;
