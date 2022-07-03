import React from 'react';
import Link from 'next/link';
import {NavContainer,Nav,Navbar,NavbarItem,NavLink,NavLogo,NavTitle} from './style.js';
const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
        <img src="https://img.icons8.com/plasticine/100/000000/hospital-3.png"/>
        <NavTitle>Healthify</NavTitle>
        </NavLogo>
      <Navbar>
        <NavbarItem>
          <NavLink href="/">Home</NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink href="#about">About</NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavbarItem>

      </Navbar>
      </NavContainer>
    </Nav>
  )
}

export default NavBar
