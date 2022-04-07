import getAncestor from "../getAncestor";

const taskReducer = (state = [], action) => {
    let stateTemp = state.map(x => x);
    let taskNo;
    switch (action.type) {
        case "ADD_TASK":
            stateTemp.push(action.payload);
            return stateTemp;
        case "DELETE_TASK":
            taskNo = getAncestor(action.payload.currentTarget, 5).dataset.task;
            stateTemp.splice(taskNo, 1);
            return stateTemp;
        default:
            return state;
    }
};
export default taskReducer;
