import React from 'react';
import Header from './components/header/Header';
import Score from './components/header/Score';
// import Card from './components/card/Card';
// import Footer from './components/footer/Footer';

import './styles/main.css';

// const clickbox = [
//   {
//     id: 1,
//   },
//   {
//     id: 2,
//   },
//   {
//     id: 3,
//   },
//   {
//     id: 4,
//   },
//   {
//     id: 5,
//   },
//   {
//     id: 6,
//   },
//   {
//     id: 7,
//   },
//   {
//     id: 8,
//   },
//   {
//     id: 9,
//   },
//   {
//     id: 10,
//   },
//   {
//     id: 11,
//   },
//   {
//     id: 12,
//   }
// ];

function App() {
  return (
    <div className="App">
      <Header/>
      <Score/>

    </div>
  );
}

export default App;
