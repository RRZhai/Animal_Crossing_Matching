import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
      {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
    </Router>
  // </React.StrictMode>
);


