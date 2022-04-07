/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import AddButton from "./components/AddButton";
import NewTask from "./components/NewTask";
import Task from "./components/Task";
import TaskHeader from "./components/TaskHeader";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

function App() {
    const showInput = useSelector(state => state.showInput);
    const tasks = useSelector(state => state.tasks);

    let incompleteTasks = [];
    let completeTasks = [];

    tasks.forEach((task, index) => {
        if (task.complete) {
            completeTasks.push(
                <Row key={index}>
                    <Task key={index} complete="true" taskNo={index} {...task} />
                </Row>
            );
        } else {
            incompleteTasks.push(
                <Row key={index}>
                    <Task key={index} complete="false" taskNo={index} {...task} />
                </Row>
            );
        }
    });

    return (
        <Container id="content">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <AddButton />
                </Col>
            </Row>
            <Row>{showInput ? <NewTask /> : ""}</Row>
            <Row>{tasks.length > 0 ? <TaskHeader /> : ""}</Row>
            {incompleteTasks}
            {completeTasks}
        </Container>
    );
}

export default App;
