import { combineReducers } from "redux";
import movies from "./movies";
import letters from "./letters";
import score from "./score";

export default combineReducers({
  movies,
  letters,
  score,
});
