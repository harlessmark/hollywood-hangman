import React, { useState } from "react";
import "./App.css";

import Game from "./components/Game";

function App() {
  // const [score, setScore] = useState(0);
  // const [tries, setTries] = useState(6);
  const [movieHistory, setMovieHistory] = useState([]);

  return (
    <div className='App App-header'>
      <Game setMovieHistory={setMovieHistory} movieHistory={movieHistory} />
    </div>
  );
}

export default App;
