import React, { useEffect } from "react";
import Movie from "./Movie";

import { fetchMovie } from "../utils";
import { useDispatch } from "react-redux";

function Game() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovie = async () => {
      const payload = await fetchMovie();
      dispatch({ type: "ADD_MOVIE", payload });
    };

    getMovie();
  }, [dispatch]);

  return (
    <div>
      <Movie />
    </div>
  );
}

export default Game;
