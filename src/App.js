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
    return (
        <Container id="content">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <AddButton />
                </Col>
            </Row>
            <Row>{showInput ? <NewTask /> : ""}</Row>
            <Row>{tasks.length > 0 ? <TaskHeader /> : ""}</Row>
            {tasks.map((task, index) => (
                <Row key={index}>
                    <Task key={index} taskNo={index} {...task} />
                </Row>
            ))}
        </Container>
    );
}

export default App;
