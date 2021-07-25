import React, {useState, useEffect} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';


import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItems,
  NavLinks,
  MobileIcon
} from './Navbar.elements'



function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
     <>
       <Nav>
        <NavbarContainer>
          <NavLogo to = '/'>
             Portfolio..
          </NavLogo>
          <NavMenu click={click}>
            <NavItems>
              <NavLinks to = '/' onClick = {handleClick}>
                Home
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to = '/about' onClick = {handleClick}>
                About
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to = '/works' onClick = {handleClick}>
                Works
              </NavLinks>
            </NavItems>
          </NavMenu>
          <MobileIcon onClick = {handleClick}>
            {click ? <FaTimes/> :<FaBars/>}
          </MobileIcon>
        </NavbarContainer>
       </Nav>
     </>
  );
}

export default Navbar;