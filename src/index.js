import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './Context';
import './style.css';

ReactDOM.render(
  <div className="bg-green-500 p-4">
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
  </div>,
  document.getElementById('root')
);
