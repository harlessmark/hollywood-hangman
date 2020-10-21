import React from "react";
import Title from "./Title";
import styled from "styled-components";
import Card from "../styled/Card";
import GuessedLetters from "./GuessedLetters";
import P from "../styled/P";
import Div from "../styled/Div";

import { ReactComponent as MarkSVG } from "../assets/mark.svg";
import { useSelector } from "react-redux";

const H3 = styled.h3`
  color: #716040;
  margin: 0 0 0 1rem;
`;

const H4 = styled.h4`
  margin: 0;
  -webkit-text-stroke-width: 1px;
`;

const Speech = styled.div`
  border: 2px solid #020826;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #fffffe;
  border-radius: 10px;
`;

function Mark(props) {
  const { tries } = useSelector(state => state.movie);
  return (
    <Card>
      <Div flexStart>
        <MarkSVG style={{ height: "100px", margin: "-10px" }} />

        <div>
          <H3>Mark, The Movie Buff</H3>
          <P style={{ margin: "2px 0 0 1rem" }}>
            {props.status || (tries !== 0 && <GuessedLetters />)}
          </P>
        </div>
      </Div>

      {tries !== 0 && <Title />}

      <Speech>
        {props.dialogue && <P>{props.dialogue}</P>}

        {props.plot && <H4>Plot</H4>}
        {props.plot && <P movie>{props.plot}</P>}

        {props.actors && <H4>Featuring</H4>}
        {props.actors && <P movie>{props.actors}</P>}

        {props.director && <H4>Directed By</H4>}
        {props.director && <P movie>{props.director}</P>}
      </Speech>

      <ol style={{ paddingLeft: "2rem" }}>{props.movieList}</ol>
    </Card>
  );
}

export default Mark;
