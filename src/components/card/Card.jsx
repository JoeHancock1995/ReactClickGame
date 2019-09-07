import React from 'react';
import "./style.css";

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

function Card(props) {
    return (
        <div className="card-container">
            <div className="img-container">

                <img alt={props.id} src={props.image}/>
                
            </div>
        <span onClick={() => props.shuffleCard(props.id)}className="shuffle"></span>
        </div> 
    );
}
export default Card;