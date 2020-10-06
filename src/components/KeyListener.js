import React from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

export default props => (
  <KeyboardEventHandler
    handleKeys={[..."qwertyuiopasdfghjklzxcvbnm"]}
    // onKeyEvent={key => props.setGuessedLetters([...props.guessedLetters, key])}
    onKeyEvent={letter => props.doubleLetterCheck(letter)}
  />
);
