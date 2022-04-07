/* eslint-disable react/prop-types */
import React from "react";
import { Form, Field } from "react-final-form";
import BSForm from "react-bootstrap/Form";
import Input from "./Input";
import MyDatePicker from "./MyDatePicker";
import PriorityPicker from "./PriorityPicker";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addTask, showInput } from "../actions";
import { Col, Container, Row } from "react-bootstrap";

const renderInput = ({ input, meta }) => (
    <Input {...input} type="text" errorMessage={meta.touched && meta.error} />
);

const requiredText = v => {
    if (!v || v === "") {
        return "Please give your task a name";
    }

    return undefined;
};

function NewTask() {
    const dispatch = useDispatch();
    return (
        <Form
            onSubmit={values => {
                dispatch(addTask(values));
                dispatch(showInput());
            }}
            render={({ handleSubmit }) => (
                <Container id="new-task-container">
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <BSForm.Label>Task Name</BSForm.Label>
                                <Field name="taskName" component={renderInput} validate={requiredText} />
                            </Col>
                            <Col>
                                <BSForm.Label>Priority</BSForm.Label>
                                <Field initialValue="Low" name="priority">
                                    {props => (
                                        <div>
                                            <PriorityPicker
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                            </Col>
                            <Col>
                                <BSForm.Label>Due Date</BSForm.Label>
                                <Field name="dueDate">
                                    {props => (
                                        <div>
                                            <MyDatePicker
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                            />
                                        </div>
                                    )}
                                </Field>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="success" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </Container>
            )}
        />
    );
}

export default NewTask;
