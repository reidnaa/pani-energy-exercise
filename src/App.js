import React from 'react';
import './App.css';
import OptimizationFeature from './components/OptimizationFeature';
import image from './pani-logo.png';

function App() {
  return (
    <div className="App">
      <header>
        <div className="top">
          <div class="logo">
            <img src={image} alt="logo" />
          </div>

          <h1>Plant Optimization</h1>
        </div>
        <nav>
          <a href="/" >Settings</a>
          <a href="/" >Account</a>
          <a href="/" >Logout</a>
          <a href="/">Contact Support</a>
        </nav>
      </header>
      
      <OptimizationFeature />
    </div>
  );
}

export default App;
