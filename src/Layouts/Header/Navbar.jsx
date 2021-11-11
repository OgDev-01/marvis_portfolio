import React from "react"
import { Link } from "react-router-dom"
// import ""
export default function NavBar({ navBar, setNavBar }) {
  const handleToggle = () => {
    setNavBar(true)

    document.body.style.overflow = "hidden"
    document.body.style.touchAction = "none"
  }
  return (
    <header className='header'>
      <div className='navBar'>
        <div className='brand'>
          <Link to='/' className='brandLink'>
            <span> Marvis.</span>
          </Link>
        </div>
        <div className='menu' onClick={handleToggle}>
          <span className='menuText'>Menu</span>
          <span className='menuIcon'>
            <div className='line line-1'></div>
            <div className='line line-2'></div>
          </span>
        </div>
      </div>
    </header>
  )
}
