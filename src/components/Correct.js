import React from "react";
import Mark from "./Mark";
import Span from "../styled/Span";
import { slur } from "../insults";

export default function Correct() {
  const dialogue = `Congrats! You got it correct, you _slur_! I bet you can't keep this going.`;

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
