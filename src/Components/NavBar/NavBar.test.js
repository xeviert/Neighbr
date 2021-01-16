import React from 'react'
import ReactDOM from 'react-dom'
import { BrowswerRouter as Router } from 'react-router-dom'
import NavBar from './NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <NavBar />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div)
});