import React, { Component } from 'react';

class Card extends React.Component {
    constructor(){
        super()
        this.state = {
            
        }
    }
render() {
// const notClicked = props.clickboxes.filter(clickbox => !clickbox.clicked);
    return (
          <button className="square" onClick={function() { alert('click');}}>
           {this.props.value}     
          </button>
    )
    }
};
export default Card;