import React from 'react'; 
import "./style.css";

import pic01 from './images/pic01.png';

function card01 (props) {
    return (
        <div className="container-box">
            <button> <img alt={pic01} src={pic01}/></button>
        </div> 
    );
}
export default card01