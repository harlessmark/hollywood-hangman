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
      const payload = await fetchMovie();
      dispatch({ type: "ADD_MOVIE", payload });
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
