import React from "react";
import ReactDOM from "react-dom"
import Login from "../Components/Login/LoginPage"

import { BrowserRouter as Router } from "react-router-dom";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <Router>
        <Login />
    </Router>,
    div
    );
    
    ReactDOM.unmountComponentAtNode(div);
});