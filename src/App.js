import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Portfolio from './components/portfolio.component';



function App() {
  return (
    <Router>
      <Route path="/" exact component={Portfolio} />
    </Router>
  );
}

export default App;
