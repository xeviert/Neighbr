import React from 'react'
import ReactDOM from 'react-dom'
import { BrowswerRouter as Router } from 'react-router-dom'
import Register from './Register';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <Register/>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div)
});