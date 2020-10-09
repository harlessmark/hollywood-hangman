import React from "react";
import "./App.css";
import Mark from "./components/Mark";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const score = useSelector(state => state.scoreReducer);
  const letters = useSelector(state => state.letterReducer);
  const dispatch = useDispatch();

  const startGame = () => dispatch({ type: "START_GAME" });

  return (
    <div className='App App-header'>
      {score === null && <Mark startGame={startGame} />}
      {score !== null && letters.length < 6 && <Game />}
      {letters.length >= 6 && <GameOver />}
    </div>
  );
}

export default App;
