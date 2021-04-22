import React from "react";
import ReactDOM from "react-dom"
import Register from "../Components/Register/Register"

import { BrowserRouter as Router } from "react-router-dom";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <Router>
        <Register />
    </Router>,
    div
    );
    
    ReactDOM.unmountComponentAtNode(div);
});