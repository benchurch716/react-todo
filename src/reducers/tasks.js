import getAncestor from "../getAncestor";

const taskReducer = (state = [], action) => {
    let stateTemp = state.map(x => x);
    let taskNo;
    switch (action.type) {
        case "ADD_TASK":
            stateTemp.push(action.payload);
            stateTemp[stateTemp.length - 1].complete = false;
            return stateTemp;
        case "DELETE_TASK":
            taskNo = getAncestor(action.payload.currentTarget, 6).dataset.task;
            stateTemp.splice(taskNo, 1);
            return stateTemp;
        case "COMPLETE_TASK":
            taskNo = getAncestor(action.payload.currentTarget, 6).dataset.task;
            stateTemp[taskNo].complete = !stateTemp[taskNo].complete;
            return stateTemp;
        default:
            return state;
    }
};
export default taskReducer;
