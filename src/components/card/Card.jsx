import React from 'react';
import "./style.css";
import pic01 from './images/pic01.png';
import pic02 from './images/pic02.png';
import pic03 from './images/pic03.png';
import pic04 from './images/pic04.png';
import pic05 from './images/pic05.png';
import pic06 from './images/pic06.png';
import pic07 from './images/pic07.png';
import pic08 from './images/pic08.png';
import pic09 from './images/pic09.png';
import pic10 from './images/pic10.png';
import pic11 from './images/pic11.png';
import pic12 from './images/pic12.png';

function Card(props) {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={pic01} alt="01"/>
                <img src={pic02} alt="2"/>
                <img src={pic03} alt="3"/>
                <img src={pic04} alt="4"/>
                <img src={pic05} alt="5"/>
                <img src={pic06} alt="6"/>
                <img src={pic07} alt="7"/>
                <img src={pic08} alt="8"/>
                <img src={pic09} alt="9"/>
                <img src={pic10} alt="10"/>
                <img src={pic11} alt="11"/>
                <img src={pic12} alt="12"/>
                
            </div>
        <span onClick={() => props.shuffleCard(props.id)}className="shuffle"></span>
        </div> 
    );
}
export default Card;