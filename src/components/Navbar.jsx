import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = ({show,setShow}) => {
  return (
    <div style={{display:show&&'block'}} className={`container-fluid moble-nav ${show?"classe":""}`}>
        <nav className='container small-screen'>
            <li onClick={()=>setShow(false)}><NavLink to='/'> Home</NavLink></li>
            <li onClick={()=>setShow(false)}><NavLink to='/about'>About</NavLink></li>
            <li onClick={()=>setShow(false)}><NavLink to='/contact'>Contact</NavLink></li>
            <li onClick={()=>setShow(false)}><NavLink to='service'>Service</NavLink></li>
            <li onClick={()=>setShow(false)}><NavLink>Project</NavLink></li>
        </nav>
    </div>
  )
}

export default Navbar