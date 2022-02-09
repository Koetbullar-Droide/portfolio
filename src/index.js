import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Routing from './Router';

const root = document.getElementById('root');

render(
  <StrictMode>
    <Routing />
  </StrictMode>,
  root,
);
