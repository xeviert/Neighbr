import React from 'react'
import ReactDOM from 'react-dom'
import { BrowswerRouter as Router } from 'react-router-dom'
import FavorSubmission from './FavorSubmission';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <FavorSubmission />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div)
});