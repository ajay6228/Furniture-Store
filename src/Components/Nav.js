import React, { useState } from "react";
 import { FaAtlassian } from 'react-icons/fa'
 import SearchIcon from '@mui/icons-material/Search';
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
        <Link  to="/"><FaAtlassian className='navbar-icon' style={{ height: 40, width: 100, color:'black'}} /></Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <ul className="navbar-nav" style={{fontSize:'20px', paddingLeft:'800%', color:'black'}}>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li> */}
              <li className="nav-item" >
                <Link className="nav-link" to="/login"><b>Login/Register</b></Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/Shop">Shop</Link>
              </li> */}
              {/* <li class="nav-item">
                                      <Link class="nav-link" to="/admin">Admin</Link>
                                  </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/cart">
                    cart
                  {/* <ShoppingCart style={{ color: 'white' }} size={25}  /> */}
                {/* </Link>
              </li>  */}
            </ul>
            
          </Nav>
          {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:'200px'}}/>
        <button class="btn btn-outline-dark active" type="submit" style={{width:'35px'}}><SearchIcon /></button>
      </form> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;

//  import React from 'react'
//  import { FaAtlassian } from 'react-icons/fa'
//  import { Link } from "react-router-dom"
//  import { ShoppingCart } from 'phosphor-react'
//  import SearchIcon from '@mui/icons-material/Search';
//  import LoginIcon from '@mui/icons-material/Login';
//  import HomeIcon from '@mui/icons-material/Home';
//  import './Nav.css';
//  function NavBarComponent() {
//      return (

//          <div>
//                          <nav class="navbar navbar-expand-lg " >
                        
//                          <div class="collapse navbar-collapse" id="navbarNavDropdown" >
//                          <FaAtlassian className='navbar-icon' style={{ height: 30, width: 100 }} />

//                              <ul class="navbar-nav">
//                                  <li class="nav-item">
//                                      <Link class="nav-link active" aria-current="page" to="/">Home</Link>
//                                  </li>
//                                  <li class="nav-item">
//                                      <Link class="nav-link" to="/login">Login</Link>
//                                  </li>
//                                  <li class="nav-item">
//                                      <Link class="nav-link" to="/register">Register</Link>
//                                  </li>
//                                  <li class="nav-item">
//                                      <Link class="nav-link" to="/shop">shop</Link>
//                                  </li>
//                                  <li class="nav-item">
//                                      <Link class="nav-link" to="/fetch">fetch</Link>
//                                  </li>
//                                  <li class="nav-item">
//                                      <Link class="nav-link" to="/cart">Cart</Link>
//                                  </li>
                           
//                              </ul>
//                              <form class="d-flex">
//                                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                                  <button class="btn btn-outline-dark active" type="submit">Search</button>
//                              </form>
//                          </div>

//                  </nav>
//                      </div>

//      )
//  }

//  export default NavBarComponent