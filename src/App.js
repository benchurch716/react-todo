import React, { Component } from "react";
import "./App.css";
import AddButton from "./components/AddButton";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="content">
                <AddButton />
            </div>
        );
    }
}

export default App;
