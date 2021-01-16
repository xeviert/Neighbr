import React from 'react'
import ReactDOM from 'react-dom'
import { BrowswerRouter as Router } from 'react-router-dom'
import LoginPage from './LoginPage';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <LoginPage/>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div)
});