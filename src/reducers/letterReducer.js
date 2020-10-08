let movieID = 0;

// TODO needs to be objects with movieID as property

export default (state = [], { type, letter }) => {
  if (type === "ADD_LETTER") {
    return [...state, letter];
  } else if (type === "NEW_MOVIE") {
    movieID++;
    return state;
  } else return state;
};
