import React, { useEffect } from "react";
import "./App.css";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import Mark from "./components/Mark";
import Message from "./components/Message";

import { useDispatch, useSelector } from "react-redux";
import ReactGa from "react-ga";

function App() {
  const { score } = useSelector(state => state.game);
  const { tries, gotCorrect } = useSelector(state => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      alert("mobile device");
    } else {
      // false for not mobile device
      alert("not mobile device");
    }

    // Google Analytics
    ReactGa.initialize("UA-179501427-4");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  if (gotCorrect) {
    setTimeout(() => {
      dispatch({ type: "INITIAL_STATE_MOVIE" });
    }, 3000);
  }

  const startGame = () => dispatch({ type: "START_GAME" });

  return (
    <div>
      {score === null && <Message />}
      <Mark />
      {gotCorrect === true && "Correct!"}
      {score === null && <Instructions startGame={startGame} />}
      {score !== null && tries !== 0 && gotCorrect === false && <Game />}
      {tries === 0 && <GameOver />}
    </div>
  );
}

export default App;
