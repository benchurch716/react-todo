/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import AddButton from "./components/AddButton";
import NewTask from "./components/NewTask";
import Task from "./components/Task";
import TaskHeader from "./components/TaskHeader";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
    const showInput = useSelector(state => state.showInput);
    const tasks = useSelector(state => state.tasks);

    let incompleteTasks = [];
    let completeTasks = [];

    tasks.forEach((task, index) => {
        if (task.complete) {
            completeTasks.push(<Task complete="true" taskNo={index} {...task} />);
        } else {
            incompleteTasks.push(<Task complete="false" taskNo={index} {...task} />);
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
            <DragDropContext onDragEnd={() => {}}>
                <Droppable droppableId="incomplete">
                    {provided => {
                        return (
                            <div className="incomplete" {...provided.droppableProps} ref={provided.innerRef}>
                                {incompleteTasks.map((task, index) => {
                                    return (
                                        <Draggable
                                            key={`key-${index}`}
                                            draggableId={`id-${index}`}
                                            index={index}
                                        >
                                            {provided => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <Row>{task}</Row>
                                                </div>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </DragDropContext>
        </Container>
    );
}

export default App;
