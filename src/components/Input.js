import React from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

// eslint-disable-next-line react/prop-types
const Input = ({ errorMessage, ...props }) => (
    <div className="input-text">
        <Form.Control {...props}></Form.Control>
        {errorMessage && (
            <Alert variant="danger" className="errorMessage">
                {errorMessage}
            </Alert>
        )}
    </div>
);

export default Input;
