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

function CardImages(props) {
    return (
        <div className="container-box">
            <img alt={Image.prop} src={pic01}/>
            <img alt={pic02} src={pic02}/>
            <img alt={pic03} src={pic03}/>
            <img alt={pic04} src={pic04}/>
            <img alt={pic05} src={pic05}/>
            <img alt={pic06} src={pic06}/>
            <img alt={pic07} src={pic07}/>
            <img alt={pic08} src={pic08}/>
            <img alt={pic09} src={pic09}/>
            <img alt={pic10} src={pic10}/>
            <img alt={pic11} src={pic11}/>
            <img alt={pic12} src={pic12}/>
        </div> 
    );
}
export default CardImages;