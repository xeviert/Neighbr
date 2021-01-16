import React from 'react'
import ReactDOM from 'react-dom'
import { BrowswerRouter as Router } from 'react-router-dom'
import FavorItem from './FavorItem';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <FavorItem />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div)
});