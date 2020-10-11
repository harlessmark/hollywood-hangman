import { combineReducers } from "redux";
import movies from "./movies";
import title from "./title";
import letters from "./letters";
import score from "./score";

export default combineReducers({
  movies,
  title,
  letters,
  score,
});
