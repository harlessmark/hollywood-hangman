import React from "react";
import Instructions from "./Instructions";
import Game from "./Game";
import GameOver from "./GameOver";

import { useDispatch, useSelector } from "react-redux";

function Container() {
  const dispatch = useDispatch();
  const score = useSelector(state => state.scoreReducer);
  const letters = useSelector(state => state.letterReducer);

  const startGame = () => dispatch({ type: "START_GAME" });

  return (
    <div>
      {score === null && <Instructions clickHandler={startGame} />}
      {score && letters.length < 6 && <Game />}
      {letters.length >= 6 && <GameOver />}
    </div>
  );
}

export default Container;
