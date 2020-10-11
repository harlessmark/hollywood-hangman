import React from "react";
import { useSelector } from "react-redux";

function TriesLeft() {
  const { tries } = useSelector(state => state.movie);

  return <p>tries left: {tries}</p>;
}

export default TriesLeft;
