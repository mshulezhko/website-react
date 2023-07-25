import React from 'react'

function MenuItem(props) {
    const { name, img, price } = props

    return <div className='menuItem'>
        <div style={{ backgroundImage: `url(${img})` }}></div>
        <h1>{name}</h1><p> {price}</p>
    </div >

}

export default MenuItem
