import React from "react";
import { useSelector } from "react-redux";

function TriesLeft() {
  const { tries } = useSelector(state => state.movie);

  let id = 0;
  const toHearts = [...Array(tries)].map(() => {
    return (
      <li style={{ display: "inline" }} key={++id}>
        <i
          className='far fa-heart'
          style={{ color: "#f25042", marginLeft: "2px" }}
        />
      </li>
    );
  });

  return (
    <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
      {toHearts}
    </ul>
  );
}

export default TriesLeft;
