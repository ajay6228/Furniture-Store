import React, { useState } from "react";
 import { FaAtlassian } from 'react-icons/fa'
 import LogoutIcon from '@mui/icons-material/Logout';
import './Nav.css'
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
} from "reactstrap";

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavbarComponent">
      <Navbar
        {...args}
        
        expand="md"
      >
        <NavbarBrand href="/">
        <Link  to="/"><FaAtlassian  style={{ height: 40, width: 100, color:'black' }} /></Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <ul className="navbar-nav" style={{fontSize:'15px'}}>
              
            <li className="nav-item">
                <Link className="nav-link" to="/Shop">Shop</Link>
              </li>
              <li class="nav-item">
                                      <Link class="nav-link" to="/fetch">fetch</Link>
                                  </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <ShoppingCart style={{ color: 'black' }} size={20}  />
                </Link>
              </li>
              </ul>
             */}
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
