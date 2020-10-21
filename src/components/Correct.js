import React from "react";
import Mark from "./Mark";
import { slur } from "../insults";
import Span from "../styled/Span";

function Correct() {
  const dialogue = `Congrats! You got it correct, you _slur_!`;

  const splitDialogue = () => {
    // splits dialogue to add css styling to slur
    const beforeSlur = dialogue.split("_slur_")[0];
    const afterSlur = dialogue.split("_slur_")[1];

    return (
      <>
        {beforeSlur}
        <Span>{slur()}</Span>
        {afterSlur}
      </>
    );
  };

  return <Mark status={"Is visibly upset"} dialogue={splitDialogue()} />;
}

export default Correct;
