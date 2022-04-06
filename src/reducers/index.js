import { combineReducers } from "redux";
import NewTaskReducer from "./newTask";
import showInputReducer from "./showInput";
import TaskReducer from "./task";

const rootReducers = combineReducers({
    showInput: showInputReducer,
    newTask: TaskReducer,
    tasks: NewTaskReducer,
});

export default rootReducers;
