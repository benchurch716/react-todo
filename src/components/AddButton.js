import React, { Component } from "react";

class AddButton extends Component {
    constructor(props) {
        super(props);
    }

    addNewTaskInput() {}

    render() {
        return <button onClick={this.addNewTaskInput}>Add Task</button>;
    }
}

export default AddButton;
