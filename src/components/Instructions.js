import React from "react";

function Instructions(props) {
  return (
    <div>
      <button onClick={props.clickHandler}>Easy Mode</button>
    </div>
  );
}

export default Instructions;
