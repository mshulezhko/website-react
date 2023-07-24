import React from 'react'
import Logo from '../assets/pizzaLogo.png'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='left-side'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='right-side'></div>
        </div>
    )
}

export default Navbar
