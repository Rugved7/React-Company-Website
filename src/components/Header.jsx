import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/App.scss';
import '../styles/Header.scss';
  import { HashLink } from 'react-router-hash-link'
const Header = () => {
  return (
    <nav>
      <h1>Rugved's Company</h1>
      <main>
        <HashLink to={"/"}>Home</HashLink>
        <HashLink to={"/#about"}>About</HashLink> {/* HashLink is used to go to about section */}
         <HashLink to ={"/#brands"}>Brands</HashLink> 
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
  )
}

export default Header