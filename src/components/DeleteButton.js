import React from "react";
import { deleteTask } from "../actions";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function DeleteButton() {
    const dispatch = useDispatch();

    return (
        <Button variant="danger" onClick={e => dispatch(deleteTask(e))}>
            <FontAwesomeIcon icon={faTrashCan} />
        </Button>
    );
}

export default DeleteButton;
