import React from "react";
import { showInput } from "../actions";
import { useDispatch } from "react-redux";

function AddButton() {
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(showInput())}>Add Task</button>;
}

export default AddButton;
