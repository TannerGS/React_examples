import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Button from './Button';
import CallAPI from './CallAPI';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Clock />
    <Button />
    <CallAPI />
  </React.StrictMode>,
  document.getElementById('root')
);

