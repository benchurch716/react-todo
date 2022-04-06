/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Form, Field, useFormState } from "react-final-form";
import Input from "./Input";
import MyDatePicker from "./MyDatePicker";
import PriorityPicker from "./PriorityPicker";
import { useDispatch, useSelector } from "react-redux";
import { addTask, showInput } from "../actions";

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
                <div id="new-task-container">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Task Name
                            <Field name="taskName" component={renderInput} validate={requiredText} />
                        </label>
                        Task
                        <label>
                            Priority
                            <Field initialValue="low" name="priority">
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
                        </label>
                        <label>
                            Due Date
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
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        />
    );
}

export default NewTask;
