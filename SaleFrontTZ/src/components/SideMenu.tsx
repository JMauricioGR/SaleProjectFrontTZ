import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const SideMenu = () => {
  return (
    <div className='side-menu'>
        <ul>
            <li><Link to="/" className ='menu-item'>Productos</Link></li>
            <li><Link to="/" className ='menu-item'>Hisotrial ventas</Link></li>
        </ul>
    </div>
  )
}

export default SideMenu