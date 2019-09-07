import React from 'react';
import './style.css'
import './fonts/stylesheet.css'
// function Header(){
//     return <h1>Card Click Game</h1>
// }
const Header = (props) => {
    // this is how to log and object for a prop
    // console.log(props)
return (
    <div className="header">
        <h1>Card Click Game</h1>
        <p>Click on each image only once to earn a point. Score will reset if you click the same one more than once.</p>
        {/* <div className="score">
            <h2>Score:</h2>
            <h2>Top Score:</h2>
        </div> */}
    </div>
    )
}

export default Header;