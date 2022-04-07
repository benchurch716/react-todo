/* eslint-disable react/prop-types */
import React from "react";
import { completeTask } from "../actions";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faRotateLeft } from "@fortawesome/free-solid-svg-icons";

function CompleteButton(props) {
    const dispatch = useDispatch();

    return (
        <Button variant="info" onClick={e => dispatch(completeTask(e))}>
            <FontAwesomeIcon icon={props.complete ? faRotateLeft : faCheck} />
        </Button>
    );
}

export default CompleteButton;
