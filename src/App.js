import React, { Component } from "react";
import Header from './components/header/Header';
import Card from './components/card';
// import images from './images.json'
import Wrapper from './components/wrapper'

class App extends Component {
  state = {
    // images
  };
  // scoreCard = id => {
  //   const images = this.state.images.filter(image => image.id !== id);
  //   this.setState({images});
  // };

  render () {
    return (
      <Wrapper>
      <Header/>
      <Card/>
      {/* {this.state.images.map(image => (
        <Card
          id={image.id}
          key={image.id}
          image={image.id}
          />
      ))} */}
      </Wrapper>
    );
 }
}

export default App;