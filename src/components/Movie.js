import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import KeyboardEventHandler from "react-keyboard-event-handler";

import Mark from "./Mark";

export default function Movie() {
  const { letters } = useSelector(state => state.movie);
  const { data } = useSelector(state => state.movie);
  const isMobile = useSelector(state => state.isMobile);
  const dispatch = useDispatch();

  const [layout] = useState("default");
  const keyboard = useRef();

  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);

  const getButtonTheme = () => {
    const buttonTheme = [];

    if (correctLetters.length) {
      buttonTheme.push({
        class: "correct-letter",
        buttons: correctLetters.join(" "),
      });
    }

    if (incorrectLetters.length) {
      buttonTheme.push({
        class: "incorrect-letter",
        buttons: incorrectLetters.join(" "),
      });
    }

    return buttonTheme;
  };

  const onCorrectLetter = letterLower => {
    const letter = letterLower.toUpperCase();

    setCorrectLetters([...correctLetters, letter]);
    setIncorrectLetters([...incorrectLetters.filter(i => i !== letter)]);
  };

  const onIncorrectLetter = letterLower => {
    const letter = letterLower.toUpperCase();

    setIncorrectLetters([...incorrectLetters, letter]);
    setCorrectLetters([...correctLetters.filter(i => i !== letter)]);
  };

  const letterCheck = letter => {
    // checks if letter has already been entered
    if (!letters.includes(letter)) {
      dispatch({ type: "ADD_LETTER", letter });
      const re = new RegExp(`${letter}`, "gi");

      if (re.test(data.title)) {
        // tries remains same if letter is in title
        onCorrectLetter(letter);
        dispatch({ type: "CORRECT_GUESS", letter });
      } else {
        // tries-- if letter is not in title
        onIncorrectLetter(letter);
        dispatch({ type: "DECREMENT_TRIES" });
      }
    }
  };

  const onKeyPress = letter => {
    if (letter === "☕️") {
      window.open("http://2spacemilk.com", "_blank");
    } else letterCheck(letter.toLowerCase());
  };

  return (
    <div>
      <Mark plot={data?.plot} actors={data?.actors} director={data?.director} />

      {/* // margin for keyboard */}
      {isMobile && (
        <div style={{ marginTop: "132px", color: "#fffffe" }}>.</div>
      )}

      {isMobile && (
        <Keyboard
          keyboardRef={r => (keyboard.current = r)}
          layoutName={layout}
          onKeyPress={onKeyPress}
          theme={"hg-theme-default hg-layout-default myTheme"}
          layout={{
            default: [
              "Q W E R T Y U I O P",
              "A S D F G H J K L",
              "Z X C V B N M ☕️",
            ],
          }}
          buttonTheme={getButtonTheme()}
        />
      )}
      <KeyboardEventHandler
        handleKeys={[..."qwertyuiopasdfghjklzxcvbnm"]}
        onKeyEvent={letter => letterCheck(letter)}
      />
    </div>
  );
}
