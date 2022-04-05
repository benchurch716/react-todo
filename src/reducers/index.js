import { combineReducers } from "redux";
import showInputReducer from "./showInput";

const rootReducers = combineReducers({
    showInput: showInputReducer,
});

export default rootReducers;
