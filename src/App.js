import React, { Component } from "react";
import Header from './components/header/Header';
import Wrapper from './components/wrapper/Wrapper';
import Card from './components/card/Card';
import './images.json'
import images from './images'
// import pic01 from './images/pic01.png';
// import pic02 from './images/pic02.png';
// import pic03 from './images/pic03.png';
// import pic04 from './images/pic04.png';
// import pic05 from './images/pic05.png';
// import pic06 from './images/pic06.png';
// import pic07 from './images/pic07.png';
// import pic08 from './images/pic08.png';
// import pic09 from './images/pic09.png';
// import pic10 from './images/pic10.png';
// import pic11 from './images/pic11.png';
// import pic12 from './images/pic12.png';

// import Footer from './components/footer/Footer';

// import './styles/main.css';

class App extends Component {
state = {
  images
};
// images is the json file. cardImage is what is being mapped. image is the actual image reference only used once
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
        {/* <Footer/> */}
      </Wrapper>
    );
  }
}
export default App;
