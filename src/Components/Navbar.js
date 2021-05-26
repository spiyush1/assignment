import React from 'react'
import './Navbar.css';

function Navbar({ func }) {
    return (
        <div id = 'navbar'>
            <img src = "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt = 'Netflix logo'/>
            <button onClick = {func}>Get Users</button>
        </div>
    )
}

export default Navbar
