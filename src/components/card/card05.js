import React from 'react'; 
import "./style.css";

import pic05 from './images/pic05.png';

function Card05 (props) {
    return (
        <div className="container-box">
            <button> <img alt={pic05} src={pic05}/></button>
        </div> 
    );
}
export default Card05