import movies from "./movies.json";
const TotallyRandom = require("totally-random");

export const fetchMovie = async () => {
  const random = new TotallyRandom();

  // gets random movie ID
  const movieID = random.array(movies);
  const movieAPI = `http://www.omdbapi.com/?i=${movieID}&apikey=80e59555`;

  try {
    const res = await fetch(movieAPI);
    const data = await res.json();

    return await data;
  } catch (error) {
    console.log(error);
  }
};
