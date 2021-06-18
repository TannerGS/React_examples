import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Button from './Button';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Clock />
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);

