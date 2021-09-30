import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App';
import favicon from './images/logo.png';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
    <Helmet>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <title>Tlaxcarnivoras</title>
    </Helmet>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);