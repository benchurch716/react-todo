import React from "react";
import "./App.css";
import AddButton from "./components/AddButton";
import NewTask from "./components/NewTask";
import Task from "./components/Task";
import { useSelector } from "react-redux";

function App() {
    const showInput = useSelector(state => state.showInput);
    const tasks = useSelector(state => state.tasks);
    return (
        <div id="content">
            <AddButton />
            {showInput ? <NewTask /> : ""}
            {tasks.map((task, index) => (
                <Task key={index} {...task} />
            ))}
        </div>
    );
}

export default App;
