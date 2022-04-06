const AddTaskReducer = (state = [], action) => {
    let stateTemp = state;
    switch (action.type) {
        case "ADD_TASK":
            stateTemp.push(action.payload);
            return stateTemp;
        default:
            return state;
    }
};
export default AddTaskReducer;
