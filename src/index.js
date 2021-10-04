import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet'
import favicon from './images/logo.png';

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