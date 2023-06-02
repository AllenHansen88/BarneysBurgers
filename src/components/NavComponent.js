import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

let linkStyle = {
  textDecoration: "none",
  color: "antiquewhite"
}

function NavComponent() {
    return (
      <nav className='navList'>
        <ul className='combinedList'>
          <li id='listItem'><Link to="/" id='listItem'>Home</Link></li>
          <li id='listItem'><Link to="/menu" id='listItem'>Menu</Link></li>
          <li id='listItem'><Link to="https://www.doordash.com/store/barney%E2%80%99s-better-burgers-medford-2635557/" style={linkStyle}>Order Online</Link></li>
          <li id='listItem'><Link to="/gallery" id="listItem">Gallery</Link></li>
          <li id='listItem'><Link to="/locations" id='listItem'>Locations</Link></li>
        </ul>
      </nav>
    );
  }

  export default NavComponent;
