import React from 'react'; 
import "./style.css";

import pic02 from './images/pic02.png';

function card02 (props) {
    return (
        <div className="container-box">
            <button> <img alt={pic02} src={pic02}/></button>
        </div> 
    );
}
export default card02