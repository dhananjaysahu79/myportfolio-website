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
          <NavLogo>
             Portfolio..
          </NavLogo>
          <NavMenu click={click}>
            <NavItems>
              <NavLinks>
                About
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks>
                Works
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks>
                Contact
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