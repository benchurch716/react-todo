/* eslint-disable react/prop-types */
import { format } from "date-fns";
import React from "react";

function Task(props) {
    console.log(props);
    return (
        <div className="task-container ">
            <div className="task-name">{props.taskName}</div>
            <div className="priority">{props.priority}</div>
            <div className="due-date">{format(props.dueDate, "M/d/yyyy")}</div>
        </div>
    );
}
export default Task;
