import React from "react";

function Instructions(props) {
  return (
    <div>
      <p>
        Play the classic game of hangman using{" "}
        <a
          href='https://www.imdb.com/search/title/?count=100&groups=top_1000&sort=user_rating'
          target='_blank'>
          IMDb's top 1,000 movies
        </a>
        .
      </p>
      <button onClick={props.clickHandler}>Easy Mode</button>
    </div>
  );
}

export default Instructions;
