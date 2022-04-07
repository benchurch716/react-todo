/* eslint-disable react/prop-types */
import { format } from "date-fns";
import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

function Task(props) {
    console.log(props);
    return (
        <Container className="task-container ">
            <Alert
                variant={
                    props.priority == "Low"
                        ? "success"
                        : props.priority == "Medium"
                        ? "warning"
                        : props.priority == "High"
                        ? "danger"
                        : "secondary"
                }
            >
                <Row>
                    <Col>
                        <div className="task-name">{props.taskName}</div>
                    </Col>
                    <Col>
                        <div className="priority">{props.priority}</div>
                    </Col>
                    <Col>
                        <div className="due-date">{format(props.dueDate || new Date(), "M/d/yyyy")}</div>
                    </Col>
                </Row>
            </Alert>
        </Container>
    );
}
export default Task;
