import React from "react";
import "./App.css";
import AddButton from "./components/AddButton";
import NewTask from "./components/NewTask";
import { useSelector } from "react-redux";

function App() {
    const showInput = useSelector(state => state.showInput);

    return (
        <div id="content">
            <AddButton />
            {showInput ? <NewTask /> : ""}
        </div>
    );
}

export default App;
