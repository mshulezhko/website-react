import React from 'react'
import MenuItem from './MenuItem'
import { menuList } from '../helpers/menuList'
import '../styles/Menu.css'

function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Our menu</h1>
            <div className='menuList'>
                {
                    menuList.map((item) => {
                        return <MenuItem name={item.name} img={item.img} price={item.price} />
                    })
                }

            </div>

        </div>
    )
}

export default Menu
