import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App';
import favicon from './logo.png';

ReactDOM.render(
  <>
    <Helmet>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <title>Tlaxcarnivoras</title>
    </Helmet>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root')
);