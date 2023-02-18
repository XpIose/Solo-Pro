import React from 'react';
import { render } from 'react-dom';
import Login from './login.jsx';
import App from './App.jsx';
import './style.css';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>,
  document.getElementById('root')
);
