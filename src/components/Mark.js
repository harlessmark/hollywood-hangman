import React from "react";
import InstructionsDialogue from "./InstructionsDialogue";

function Mark(props) {
  return (
    <div>
      <img src='https://api.adorable.io/avatars/75/mark' alt='avatar' />

      <p className='mark'>
        <strong>Mark, the Movie Buff</strong>
      </p>

      <InstructionsDialogue startGame={props.startGame} />
    </div>
  );
}

export default Mark;
