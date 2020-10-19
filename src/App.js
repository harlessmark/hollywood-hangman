import React, { useEffect } from "react";
import "./App.css";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

import { useDispatch, useSelector } from "react-redux";
import ReactGa from "react-ga";

// TODO shrink size of H3 "Mark, the Movie Buff"

function App() {
  const { score } = useSelector(state => state.game);
  const { tries, gotCorrect } = useSelector(state => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    // checks if device is mobile
    const re = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    if (re.test(navigator.userAgent)) {
      dispatch({ type: "IS_MOBILE" });
    }

    // Google Analytics
    ReactGa.initialize("UA-179501427-4");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, [dispatch]);

  if (gotCorrect) {
    setTimeout(() => {
      dispatch({ type: "INITIAL_STATE_MOVIE" });
    }, 3000);
  }

  const startGame = () => dispatch({ type: "START_GAME" });

  return (
    <div>
      {gotCorrect === true && "Correct!"}
      {score === null && <Instructions startGame={startGame} />}
      {score !== null && tries !== 0 && gotCorrect === false && <Game />}
      {tries === 0 && <GameOver />}
    </div>
  );
}

export default App;
