import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import TheTitle from './Components/TheTitle/TheTitle';
import Calculator from './Components/Calculator/Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <TheTitle/>
        <Calculator/>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
