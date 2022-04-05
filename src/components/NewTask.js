import React from "react";
import Input from "./Input";
import { Form, Field } from "react-final-form";

const renderInput = ({ input, meta }) => (
    <Input {...input} type="text" errorMessage={meta.touched && meta.error} />
);

const onSubmit = values => {
    console.log(JSON.stringify(values));
};

const required = v => {
    if (!v || v === "") {
        return "This field is required";
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
                        <Field name="task-name" component={renderInput} validate={required} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        />
    );
}

export default NewTask;
