import React, { useState } from 'react'
import './NavBar.css'
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {
    const [isOpen,setIsOpen] = useState(false);

    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        <nav className="navbarItems">

      </nav>
      </>
    )
}

export default NavBar
