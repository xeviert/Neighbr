import React from 'react'
import ReactDOM from 'react-dom'
import { BrowswerRouter as Router } from 'react-router-dom'
import ListOfFavors from './ListOfFavors';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <ListOfFavors />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div)
});