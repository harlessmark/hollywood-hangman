import React from "react";
import "./App.css";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import Mark from "./components/Mark";

import { useDispatch, useSelector } from "react-redux";

// TODO error handling message from utils
// * https://countapi.xyz/

function App() {
  const { score } = useSelector(state => state.game);
  const { tries } = useSelector(state => state.movie);
  const dispatch = useDispatch();

  const startGame = () => dispatch({ type: "INIT_GAME" });

  return (
    <div className='App App-header'>
      <Mark />
      {score === null && <Instructions startGame={startGame} />}
      {score !== null && tries !== 0 && <Game />}
      {tries === 0 && <GameOver />}
    </div>
  );
}

export default App;
