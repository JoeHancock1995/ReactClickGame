import React from 'react';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Score from './components/header/Score';
import Footer from './components/footer/Footer';

import './styles/main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
