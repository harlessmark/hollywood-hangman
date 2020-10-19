import React from "react";
import { useSelector } from "react-redux";

function Score() {
  const { score } = useSelector(state => state.game);

  let id = 0;
  const toPopcorn = [...Array(score)].map(() => {
    return (
      <li style={{ display: "inline" }} key={++id}>
        <i className='far fa-popcorn' />
      </li>
    );
  });

  return (
    <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
      {toPopcorn}
    </ul>
  );
}

export default Score;
