const NewTaskReducer = (state = [], action) => {
    let stateTemp = state;
    switch (action.type) {
        case "NEW_TASK":
            stateTemp.push(action.payload);
            return stateTemp;
        default:
            return state;
    }
};
export default NewTaskReducer;
