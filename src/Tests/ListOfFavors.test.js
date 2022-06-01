import React from "react";
import ReactDOM from "react-dom"
import ListOfFavors from "../Components/HomePage/ListOfFavors/ListOfFavors"

import { BrowserRouter as Router } from "react-router-dom";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <Router>
        <ListOfFavors />
    </Router>,
    div
    );
    
    ReactDOM.unmountComponentAtNode(div);
});