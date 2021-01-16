import React from 'react'
import ReactDOM from 'react-dom'
import { BrowswerRouter as Router } from 'react-router-dom'
import HomePage from './HomePage';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <HomePage />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div)
});