import React, { useState } from "react";
import { slur } from "../insults";

function InstructionsDialogue(props) {
  let [num, setNum] = useState(0);

  const dialogue = [
    {
      mark: `Hey, ${slur()}! I heard you know a lot about movies. Doubt you know more than me, ha!`,
      player: "Try me",
    },
    {
      mark: `How about we play a little game then? A test of your movie knowledge! Unless... you're scared!`,
      player: "Bring it",
    },
    {
      mark: `Ha! The name of the game is Hollywood Hangman. It's like regular hangman but with movies!`,
      player: "Go on",
    },
    {
      mark: `I'll think of a random movie from IMDb's top 1,000 movies. And, before you ask, yes, I have them all memorized!`,
      player: "Okay",
    },
    {
      mark: `Then I'll give you some hints and you have to guess the name of the movie. Got that, ${slur()}?`,
      player: "Got it",
    },
    {
      mark: `You have only 6 guesses per movie! If you get the title correct, you move onto the next round!`,
      player: "Piece of cake",
    },
    {
      mark: `If not then game over, ha! Are you ready to play, ${slur()}?`,
      player: "Start the game",
    },
  ];

  return (
    <div>
      <p>{dialogue[num].mark}</p>

      {/* hides when final dialogue is shown */}
      {dialogue[num].player !== "Start the game" && (
        <button onClick={props.startGame}>Skip All</button>
      )}

      {/* shows when final dialogue is shown */}
      {dialogue[num].player === "Start the game" && (
        <button onClick={props.startGame}>{dialogue[num].player}</button>
      )}

      {/* hides when final dialogue is shown */}
      {dialogue[num].player !== "Start the game" && (
        <button onClick={() => setNum(num + 1)}>{dialogue[num].player}</button>
      )}
    </div>
  );
}

export default InstructionsDialogue;
