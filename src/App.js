import React, { Component } from 'react';
import Header from './components/header/Header';
import Wrapper from './components/wrapper/Wrapper';
import Card from './components/card/Card';
import images from "./images.json";
// import Footer from './components/footer/Footer';

import './styles/main.css';

class App extends Component {
state = {
  images
};

// images is the json file
// cardImage is what is being mapped
// image is the actual image reference only used once
  render() {
    return (
      <Wrapper>
        <Header></Header>
        {this.state.images.map(cardImage => (
          <Card
            id={cardImage.id}
            image={cardImage.image}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;
