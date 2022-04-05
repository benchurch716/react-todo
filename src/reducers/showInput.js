const showInputReducer = (state = false, action) => {
    switch (action.type) {
        case "SHOW_INPUT":
            return !state;
        default:
            return state;
    }
};
export default showInputReducer;
