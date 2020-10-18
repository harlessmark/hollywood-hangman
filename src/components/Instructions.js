import React, { useState } from "react";
import Button from "../styled/Button";
import { slur } from "../insults";
import Mark from "./Mark";

function Instructions(props) {
  let [num, setNum] = useState(0);

  const dialogue = [
    {
      mark: `Hey, you _slur_! I heard you know a lot about movies. Doubt you know more than me, ha!`,
      status: "Is being defensive",
      player: "Try me",
    },
    {
      mark: `How about we play a little game then? A test of your movie knowledge! Unless... you're scared!`,
      status: "Is being defensive",
      player: "Bring it",
    },
    {
      mark: `Ha! The name of the game is Hollywood Hangman. It's like regular hangman but with movies!`,
      status: "Is being defensive",
      player: "Go on",
    },
    {
      mark: `I'll think of a random movie from IMDb's top 1,000 movies. And, before you ask, yes, I have them all memorized!`,
      status: "Is bragging profusely",
      player: "Okay",
    },
    {
      mark: `Then I'll give you some hints and you have to guess the name of the movie. Got that, you _slur_?`,
      status: "Is feeling confident",
      player: "Got it",
    },
    {
      mark: `You only have _6_ guesses per movie! If you get the title correct, you move onto the next round!`,
      status: "Is feeling confident",
      player: "Piece of cake",
    },
    {
      mark: `If not then game over, ha! Are you ready to play, you _slur_?`,
      status: "Thinks he'll win",
      player: "I'm ready",
    },
  ];

  const splitDialogue = () => {
    // bolds the slurs and makes the score red
    if (dialogue[num].mark.includes("_slur_")) {
      const firstText = dialogue[num].mark.split("_slur_")[0];
      const secondText = dialogue[num].mark.split("_slur_")[1];

      return (
        <>
          {firstText}
          <span className='slur'>{slur()}</span>
          {secondText}
        </>
      );
    }

    if (dialogue[num].mark.includes("_6_")) {
      const firstText = dialogue[num].mark.split("_6_")[0];
      const secondText = dialogue[num].mark.split("_6_")[1];

      return (
        <>
          {firstText}
          <span className='final-score'>6</span>
          {secondText}
        </>
      );
    } else return dialogue[num].mark;
  };

  return (
    <div>
      <Mark status={dialogue[num].status} dialogue={splitDialogue()} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* hides when final dialogue is shown */}
        {dialogue[num].player !== "I'm ready" && (
          <Button onClick={props.startGame} style={{ marginTop: "1.5rem" }}>
            Skip All
          </Button>
        )}

        {/* hides when final dialogue is shown */}
        {dialogue[num].player !== "I'm ready" && (
          <Button
            onClick={() => setNum(num + 1)}
            style={{ marginTop: "1.5rem" }}>
            {dialogue[num].player}
          </Button>
        )}

        {/* shows when final dialogue is shown */}
        {dialogue[num].player === "I'm ready" && (
          <Button
            onClick={props.startGame}
            style={{ marginTop: "1.5rem", flexGrow: "1" }}>
            {dialogue[num].player}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Instructions;
