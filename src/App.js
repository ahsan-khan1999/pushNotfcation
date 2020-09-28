import React from 'react';
import logo from './logo.svg';
import './App.css';
import {receiveNotification} from './service_message'
function App() {
  return (
    <div className="App">
      
      <h1>Getting Started With PWA's and Firebase Services!!! </h1>
      <button onClick={receiveNotification}> Press to recieve Notification </button>
    </div>
  );
}

export default App;
