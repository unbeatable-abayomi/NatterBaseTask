import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import image1 from '../logo1.svg'
import image2 from '../profile.png'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/"> <img src={image1} className="logo navbar-links" alt="logo"/><span className="dashboard-text">DashBoard</span></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/components/" className="navbar-links">Buy Insurance</Link>
            </NavItem>
            <NavItem>
              <Link to="/accountSetting" className="navbar-links">Account Setting</Link>
            </NavItem>
           
            
          </Nav>
          
          <NavLink href="/components/">
          <img src={image2} className="logo_end" alt="logo" />
          </NavLink>
        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;