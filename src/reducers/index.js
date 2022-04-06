import { combineReducers } from "redux";
import AddTaskReducer from "./addTask";
import showInputReducer from "./showInput";

const rootReducers = combineReducers({
    showInput: showInputReducer,
    tasks: AddTaskReducer,
});

export default rootReducers;
