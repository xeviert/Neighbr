import React from 'react'
import ReactDOM from 'react-dom'
import { BrowswerRouter as Router } from 'react-router-dom'
import Profile from './Profile';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <Profile />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div)
});