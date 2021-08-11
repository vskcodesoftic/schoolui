import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from './Layout';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
     
    <Switch>
      
    <App />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

