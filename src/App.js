import React, { useEffect } from "react";
import ReactGa from "react-ga";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import logo from "./assets/logo.png";
import styled from "styled-components";

import Instructions from "./components/Instructions";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import Correct from "./components/Correct";
import Img from "./styled/Img";
import ScoreBoard from "./components/ScoreBoard";

// TODO coffee button doesn't work on Safari mobile
// find virtual keyboard onClick function

// TODO Open Peeps avatar
// media query gets larger icon

// TODO refactor

// confetti

// favicon

const Wrapper = styled.div`
  background-color: #fffffe;
  color: #716040;
  margin: 1rem;

  @media (min-width: 460px) {
    font-size: 1.2rem;
  }

  @media (min-width: 600px) {
    width: 600px;
    font-size: 1.5rem;
    margin: 4rem auto;
  }
`;

export default function App() {
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

  const startGame = () => dispatch({ type: "START_GAME" });

  return (
    <Wrapper>
      {/* header */}
      {score === null && <Img src={logo} alt='hollywood hangman' />}
      {score !== null && tries !== 0 && <ScoreBoard />}

      {/* main content */}
      {gotCorrect === true && <Correct />}
      {score === null && <Instructions startGame={startGame} />}
      {score !== null && tries !== 0 && gotCorrect === false && <Game />}

      {tries === 0 && <GameOver />}
    </Wrapper>
  );
}
