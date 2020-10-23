import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import smile from "../assets/smile.png";
import grin from "../assets/grin.png";
import laugh from "../assets/laugh.png";
import mad from "../assets/mad.png";

import Title from "./Title";
import GuessedLetters from "./GuessedLetters";

import Card from "../styled/Card";
import P from "../styled/P";
import Div from "../styled/Div";
import Button from "../styled/Button";

const TotallyRandom = require("totally-random");
const random = new TotallyRandom();

const H3 = styled.h3`
  color: #716040;
  margin: 0 0 0 1rem;
  -webkit-text-stroke-width: 0.3px;
`;

const H4 = styled.h4`
  margin: 0;
  -webkit-text-stroke-width: 0.5px;
`;

const Speech = styled.div`
  border: 2px solid #020826;
  padding: 1rem;
  background-color: #fffffe;
  border-radius: 10px;

  @media (min-width: 460px) {
    border: 3px solid #020826;
  }
`;

const Ol = styled.ol`
  padding-left: 2rem;
  margin-bottom: 0;
`;

const svgStyle = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 600) {
    return { width: "140px", height: "140px" };
  } else if (windowWidth >= 460) {
    return { width: "120px", height: "120px" };
  } else return { width: "100px", height: "100px" };
};

function Mark(props) {
  const { score } = useSelector(state => state.game);
  const { tries, gotCorrect } = useSelector(state => state.movie);

  const showEmotion = () => {
    // decides which face to show
    if (tries <= 1)
      return (
        <a
          href='https://buymeacoffee.com/2spacemilk'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={laugh} style={svgStyle()} alt='avatar' />
        </a>
      );
    if (gotCorrect)
      return (
        <a
          href='https://buymeacoffee.com/2spacemilk'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={mad} style={svgStyle()} alt='avatar' />
        </a>
      );
    if (score !== null)
      return (
        <a
          href='https://buymeacoffee.com/2spacemilk'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={grin} style={svgStyle()} alt='avatar' />
        </a>
      );

    return (
      <a
        href='https://buymeacoffee.com/2spacemilk'
        target='_blank'
        rel='noopener noreferrer'>
        <img src={smile} style={svgStyle()} alt='avatar' />
      </a>
    );
  };

  return (
    <div>
      <Card>
        <Div flexStart style={{ marginBottom: "1rem" }}>
          {showEmotion()}

          <div>
            <H3>Mark, Movie Snob</H3>
            <P style={{ margin: "2px 0 0 1rem" }}>
              {props.status || (tries !== 0 && <GuessedLetters />)}
            </P>
          </div>
        </Div>

        {score !== null && tries !== 0 && <Title />}

        <Speech>
          {props.dialogue && <P>{props.dialogue}</P>}

          {props.plot && <H4>Plot</H4>}
          {props.plot && <P movie>{props.plot}</P>}

          {props.actors && <H4>Featuring</H4>}
          {props.actors && <P movie>{props.actors}</P>}

          {props.director && <H4>Directed By</H4>}
          {props.director && <P movie>{props.director}</P>}
        </Speech>

        {tries === 0 && <Ol>{props.movieList}</Ol>}
      </Card>
      <Div flexEnd>
        {gotCorrect === true && random.between(1, 10) === 1 && (
          <a
            href='https://buymeacoffee.com/2spacemilk'
            target='_blank'
            rel='noopener noreferrer'>
            <Button>Buy Me a Coffee</Button>
          </a>
        )}
      </Div>
    </div>
  );
}

export default Mark;
