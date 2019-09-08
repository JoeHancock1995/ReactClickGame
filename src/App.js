import React, { Component } from "react";
import Header from './components/header/Header';
import Card from './components/card';
import'./images.json'
// import Wrapper from './components/wrapper'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header/>
        <Card name="pic01" url="./images/pic01.png"/>
        <Card name="pic02" url="./images/pic02.png"/>
        <Card name="pic03" url="./images/pic03.png"/>
        <Card name="pic04" url="./images/pic04.png"/> 
        <Card name="pic05" url="./images/pic05.png"/>
        <Card name="pic06" url="./images/pic06.png"/>
        <Card name="pic07" url="./images/pic07.png"/>
        <Card name="pic08" url="./images/pic08.png"/> 
        <Card name="pic09" url="./images/pic09.png"/>
        <Card name="pic10" url="./images/pic10.png"/>
        <Card name="pic11" url="./images/pic11.png"/>
        <Card name="pic12" url="./images/pic12.png"/>         
        
      </div>
    )
    // images
  };
  // scoreCard = id => {
  //   const images = this.state.images.filter(image => image.id !== id);
  //   this.setState({images});
  // };

//   render () {
//     return (
//       <Wrapper>
//       <Header/>
//       <Card/>
//       {/* {this.state.images.map(image => (
//         <Card
//           id={image.id}
//           key={image.id}
//           image={image.id}
//           />
//       ))} */}
//       </Wrapper>
//     );
//  }
 }

export default App;