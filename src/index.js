import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from "react-router-dom"
import Dashboard from './scenes/dashbard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/dashboard" component={Dashboard} />
      {/* <Route path="/users" component={UserLayout} />
      <Route path="/bills" component={Bills} /> */}
    </div>
  </BrowserRouter>
    
  
);

