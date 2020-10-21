import React, { useEffect } from "react";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import Correct from "./components/Correct";
import Img from "./styled/Img";
import ScoreBoard from "./components/ScoreBoard";

import "./App.css";
import logo from "./assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import ReactGa from "react-ga";

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
    // displays "correct" screen
    setTimeout(() => {
      dispatch({ type: "INITIAL_STATE_MOVIE" });
    }, 3500);
  }

  const startGame = () => dispatch({ type: "START_GAME" });

  return (
    <div>
      {/* header */}
      {score === null && <Img src={logo} alt='hollywood hangman' />}
      {score !== null && tries !== 0 && <ScoreBoard />}

      {/* main content */}
      {gotCorrect === true && <Correct />}
      {score === null && <Instructions startGame={startGame} />}
      {score !== null && tries !== 0 && gotCorrect === false && <Game />}

      {tries === 0 && <GameOver />}
    </div>
  );
}

export default App;
