import React from "react";
import "./App.css";
import Mark from "./components/Mark";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

import { useDispatch, useSelector } from "react-redux";

// ! work on score next
// TODO error handling message from utils
// TODO use only two reducers: one for the current game, the other for the current movie
// * https://countapi.xyz/

function App() {
  const { score } = useSelector(state => state.game);
  const { tries } = useSelector(state => state.movie);
  const dispatch = useDispatch();

  const startGame = () => dispatch({ type: "INIT_GAME" });

  return (
    <div className='App App-header'>
      {score === null && <Mark startGame={startGame} />}
      {score !== null && tries !== 0 && <Game />}
      {tries === 0 && <GameOver />}
    </div>
  );
}

export default App;
