import React from 'react';
import Login from './components/LoginForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Login />
      </div>
    </Router>
  );
}

export default App;
