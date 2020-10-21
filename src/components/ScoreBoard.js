import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../styled/Card";
import Div from "../styled/Div";

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

function ScoreBoard() {
  const { score } = useSelector(state => state.game);
  const { tries } = useSelector(state => state.movie);

  let scoreID = 0;
  const toPopcorn = [...Array(score)].map(() => {
    return (
      <li style={{ display: "inline" }} key={++scoreID}>
        <i className='far fa-popcorn' />
      </li>
    );
  });

  let triesID = 0;
  const toHearts = [...Array(tries)].map(() => {
    return (
      <li style={{ display: "inline" }} key={++triesID}>
        <i
          className='far fa-heart'
          style={{ color: "#f25042", marginLeft: "2px" }}
        />
      </li>
    );
  });

  return (
    <Card>
      <Div spaceBetween>
        <Ul>{toPopcorn}</Ul>
        <Ul>{toHearts}</Ul>
      </Div>
    </Card>
  );
}

export default ScoreBoard;
