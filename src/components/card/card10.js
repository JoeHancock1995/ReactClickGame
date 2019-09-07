import React from 'react'; 
import "./style.css";

import pic10 from './images/pic10.png';

function card10(props) {
    return (
        <div className="container-box">
            <button> <img alt={pic10} src={pic10}/></button>
        </div> 
    );
}
export default card10