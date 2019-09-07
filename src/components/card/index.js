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
        <div className="container-box">
            <button><img alt={Image.prop} src={pic01}/></button>
            <button><img alt={pic02} src={pic02}/></button>
            <button><img alt={pic03} src={pic03}/></button>
            <button><img alt={pic04} src={pic04}/></button>
            <button><img alt={pic05} src={pic05}/></button>
            <button><img alt={pic06} src={pic06}/></button>
            <button><img alt={pic07} src={pic07}/></button>
            <button><img alt={pic08} src={pic08}/></button>
            <button><img alt={pic09} src={pic09}/></button>
            <button><img alt={pic10} src={pic10}/></button>
            <button><img alt={pic11} src={pic11}/></button>
            <button> <img alt={pic12} src={pic12}/></button>

        </div> 
    );
}
export default Card;
