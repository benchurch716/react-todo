/* eslint-disable react/prop-types */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Task() {
    return (
        <Container className="task-header">
            <Row>
                <Col>
                    <div className="task-name-header">Task Name</div>
                </Col>
                <Col>
                    <div className="priority-header">Priority</div>
                </Col>
                <Col>
                    <div className="due-date-header">Due Date</div>
                </Col>
            </Row>
        </Container>
    );
}
export default Task;
