import React, { Component } from 'react';

function ImgCard(props) {
    return (
        <div className="Card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        <span onClick={() => props.shuffleCard(props.id)}className="shuffle"></span>
        </div> 
    );
}
export default Card;