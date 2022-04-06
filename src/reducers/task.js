const TaskReducer = (state = "", action) => {
    switch (action.type) {
        case "ADD_TASK":
            return JSON.parse(JSON.stringify(action.payload.values));
        default:
            return state;
    }
};
export default TaskReducer;
