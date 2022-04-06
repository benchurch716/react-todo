import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import rootReducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);
const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
