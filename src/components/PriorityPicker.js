import React from "react";
import { Form } from "react-bootstrap";
function PriorityPicker(props) {
    return (
        <Form.Select {...props}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </Form.Select>
    );
}

export default PriorityPicker;
