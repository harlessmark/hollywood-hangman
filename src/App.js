import React, { useEffect } from "react";
import "./App.css";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

import { useDispatch, useSelector } from "react-redux";
import ReactGa from "react-ga";

// TODO error handling message from utils and remove fetch from it
// TODO Google Analytics

function App() {
  const { score } = useSelector(state => state.game);
  const { tries, gotCorrect } = useSelector(state => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
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
    <div className='App App-header'>
      {score === null && <Instructions startGame={startGame} />}
      {score !== null && tries !== 0 && gotCorrect === false && <Game />}
      {tries === 0 && <GameOver />}
    </div>
  );
}

export default App;
