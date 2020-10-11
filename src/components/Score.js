import React from "react";
import { useSelector } from "react-redux";

function Score() {
  const score = useSelector(state => state.score);
  return <p>score: {score}</p>;
}

export default Score;
