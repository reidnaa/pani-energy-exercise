import React from 'react';
import './App.css';
import OptimizationFeature from './components/OptimizationFeature';

function App() {
  return (
    <div className="App">
      <div className="outside-controls">
          <p>Optimization Feature</p>
          <a href="/"><span className="arrow"></span>Logout</a>
        </div>
      <OptimizationFeature />
    </div>
  );
}

export default App;
