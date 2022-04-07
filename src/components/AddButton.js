import React from "react";
import { showInput } from "../actions";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

function AddButton() {
    const dispatch = useDispatch();

    return <Button onClick={() => dispatch(showInput())}>Add Task</Button>;
}

export default AddButton;
