import React from "react";

function About() {
  return (
    <div>
      <p>Hi!</p>

      <p>
        Polite, real Mark here. I made Hollywood Hangman because I want to
        create a fun game with a lot of replayability. I built it with React,
        Redux and a bit of Python. Movie ID data was scraped from{" "}
        <a
          href='https://www.imdb.com/search/title/?count=100&groups=top_1000&sort=user_rating'
          target='_blank'
          rel='noopener noreferrer'>
          this page
        </a>{" "}
        using Beautiful Soup 4 on October 5, 2020. Those IDs were then used to
        get the actual movie data using{" "}
        <a
          href='http://www.omdbapi.com/'
          target='_blank'
          rel='noopener noreferrer'>
          OMDb API
        </a>
        .
      </p>

      <p>
        I'm looking for my first job as a web developer. If you know someone
        who's hiring, kindly have them shoot me an email at 2spacemilk |at|
        gmail dotcom.
      </p>

      <p>Thanks for playing,</p>

      <p>Mark</p>
    </div>
  );
}

export default About;
