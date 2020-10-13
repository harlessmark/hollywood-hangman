import React from "react";
import "./App.css";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import Mark from "./components/Mark";

import { useDispatch, useSelector } from "react-redux";

// TODO error handling message from utils and remove fetch from it
// TODO Google Analytics

function App() {
  const { score } = useSelector(state => state.game);
  const { tries, gotCorrect } = useSelector(state => state.movie);
  const dispatch = useDispatch();

  if (gotCorrect) {
    setTimeout(() => {
      dispatch({ type: "INITIAL_STATE_MOVIE" });
    }, 3000);
  }

  const startGame = () => dispatch({ type: "START_GAME" });

  return (
    <div className='App App-header'>
      <Mark />
      {score === null && <Instructions startGame={startGame} />}
      {score !== null && tries !== 0 && gotCorrect === false && <Game />}
      {tries === 0 && <GameOver />}
    </div>
  );
}

export default App;
