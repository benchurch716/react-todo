export const showInput = () => {
    return { type: "SHOW_INPUT" };
};
export const addTask = task => {
    return {
        type: "ADD_TASK",
        payload: task,
    };
};
export const newTask = task => {
    return {
        type: "NEW_TASK",
        payload: task,
    };
};
