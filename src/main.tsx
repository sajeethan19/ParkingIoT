import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import * as Popper from "@popperjs/core"

ReactDOM.render(

  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>

  
  ,
  document.getElementById('root')
);
