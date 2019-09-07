import React from 'react'; 
import "./style.css";

import pic12 from './images/pic12.png';

function card12 (props) {
    return (
        <div className="container-box">
            <button> <img alt={pic12} src={pic12}/></button>
        </div> 
    );
}
export default card12