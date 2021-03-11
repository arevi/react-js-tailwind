import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Global CSS
import './global.css';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootEl
);
