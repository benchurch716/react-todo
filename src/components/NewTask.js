/* eslint-disable react/prop-types */
import React from "react";
import Input from "./Input";
import MyDatePicker from "./MyDatePicker";
import { Form, Field } from "react-final-form";
import PriorityPicker from "./PriorityPicker";

const renderInput = ({ input, meta }) => (
    <Input {...input} type="text" errorMessage={meta.touched && meta.error} />
);

const onSubmit = values => {
    console.log(JSON.stringify(values));
};

const requiredText = v => {
    if (!v || v === "") {
        return "Please give your task a name";
    }

    return undefined;
};

function NewTask() {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <div id="new-task-container">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Task Name
                            <Field name="task-name" component={renderInput} validate={requiredText} />
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
                            <Field name="due-date">
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
