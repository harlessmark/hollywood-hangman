import React from "react";
import { useSelector } from "react-redux";

function TriesLeft() {
  const tries = useSelector(state => state.letterReducer);
  const triesLeft = 6 - tries.length;

  return <p>tries left: {triesLeft ? triesLeft : 0}</p>;
}

export default TriesLeft;
