import React from "react";
import { useSelector } from "react-redux";

function Title(props) {
  const letters = useSelector(state => state.letters);
  const displayTitle = useSelector(state => state.title.displayTitle);

  return (
    <p className='blank-movie' style={{ color: "#f25042" }}>
      <b>
        {displayTitle} {props.year}
      </b>
    </p>
  );
}

export default Title;
