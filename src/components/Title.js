import React from "react";
import { useSelector } from "react-redux";

function Title(props) {
  const { displayTitle } = useSelector(state => state.movie);
  if (!displayTitle?.includes("_")) {
    // console.log("score++");
  }

  return (
    <p className='blank-movie' style={{ color: "#f25042" }}>
      <b>
        {displayTitle} {props.year}
      </b>
    </p>
  );
}

export default Title;
