import React from "react";

function PriorityPicker(props) {
    return (
        <select {...props}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
    );
}

export default PriorityPicker;
