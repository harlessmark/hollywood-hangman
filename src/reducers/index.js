import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import letterReducer from "./letterReducer";
import scoreReducer from "./scoreReducer";

export default combineReducers({ movieReducer, letterReducer, scoreReducer });
