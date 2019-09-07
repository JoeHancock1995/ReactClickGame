import React from 'react'; 
import "./style.css";

import pic03 from './images/pic03.png';

function card03 (props) {
    return (
        <div className="container-box">
            <button> <img alt={pic03} src={pic03}/></button>
        </div> 
    );
}
export default card03