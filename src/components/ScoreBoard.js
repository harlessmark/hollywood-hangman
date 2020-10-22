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

const Li = styled.li`
  display: inline;
`;

function ScoreBoard() {
  const { score } = useSelector(state => state.game);
  const { tries } = useSelector(state => state.movie);

  const popcornStyle = {
    margin: "5px 1px",
  };

  const heartsStyle = {
    margin: "5px 2px",
    color: "#f25042",
  };

  let scoreID = 0;
  const toPopcorn = [...Array(score)].map(() => {
    if (window.innerWidth >= 460)
      return (
        <Li key={++scoreID}>
          <i className='far fa-popcorn fa-lg' style={popcornStyle} />
        </Li>
      );
    else
      return (
        <Li key={++scoreID}>
          <i className='far fa-popcorn' style={popcornStyle} />
        </Li>
      );
  });

  let triesID = 0;
  const toHearts = [...Array(tries)].map(() => {
    if (window.innerWidth >= 460)
      return (
        <Li key={++triesID}>
          <i className='far fa-heart fa-lg' style={heartsStyle} />
        </Li>
      );
    else
      return (
        <Li key={++triesID}>
          <i className='far fa-heart' style={heartsStyle} />
        </Li>
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
