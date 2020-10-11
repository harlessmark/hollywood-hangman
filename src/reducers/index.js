import { combineReducers } from "redux";
import game from "./game";
import movie from "./movie";

export default combineReducers({
  game,
  movie,
});
