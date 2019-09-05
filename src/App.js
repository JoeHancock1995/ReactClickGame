import React, { Component } from 'react';
import Header from './components/header/Header';
import Wrapper from './components/wrapper/Wrapper';
import Card from './components/card/Card';
import images from './images.json';
// import Footer from './components/footer/Footer';

import './styles/main.css';

class App extends Component {
state = {
  images
};


render() {
  return (
    <Wrapper>

      <Header/>
      {this.state.images.map(Image => (
    <Card
      id={Image.id}
      image={Image.image}
    />
  ))}
    </Wrapper>
  );
}
}
export default App;
