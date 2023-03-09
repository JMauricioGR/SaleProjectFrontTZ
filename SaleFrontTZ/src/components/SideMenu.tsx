import { Link, useNavigate } from 'react-router-dom'


const SideMenu = () => {
  return (
    <div className='side-menu'>
        <ul>
            <li><Link to="/products" className ='menu-item'>Productos</Link></li>
            <li><Link to="/sales" className ='menu-item'>Historial ventas</Link></li>
        </ul>
    </div>
  )
}

export default SideMenu