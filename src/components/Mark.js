import React from "react";
import { ReactComponent as MarkSVG } from "../mark.svg";

function Mark() {
  return (
    <div>
      <MarkSVG />
      <p className='mark'>
        <strong>Mark, the Movie Buff</strong>
      </p>
    </div>
  );
}

export default Mark;
