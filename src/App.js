import React from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';

function App() {
  return (
    <div className="App">
      <h1>International Space Station Location Tracker</h1>
      <div className="container-fluid">
        <ISSLocation />
      </div>
    </div>
  );
}

export default App;
