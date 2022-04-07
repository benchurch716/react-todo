import { combineReducers } from "redux";
import taskReducer from "./tasks";
import showInputReducer from "./showInput";

const rootReducers = combineReducers({
    showInput: showInputReducer,
    tasks: taskReducer,
});

export default rootReducers;
