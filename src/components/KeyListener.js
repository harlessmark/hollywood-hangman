import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

export default props => (
  <KeyboardEventHandler
    handleKeys={[..."qwertyuiopasdfghjklzxcvbnm"]}
    onKeyEvent={key => props.setGuessedLetters([...props.guessedLetters, key])}
  />
);
