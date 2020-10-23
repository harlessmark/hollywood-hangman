import { combineReducers } from "redux";
import game from "./game";
import movie from "./movie";
import isMobile from "./isMobile";

export default combineReducers({
  game,
  movie,
  isMobile,
});
