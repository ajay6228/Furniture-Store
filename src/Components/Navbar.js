import React, { useState, useContext } from "react";
import { FaAtlassian } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShoppingCartSimple,SignOut  } from "phosphor-react";
import LogoutIcon from "@mui/icons-material/Logout";
import { ShopContext } from "./shop-context";
import "./Nav.css";
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
  const { cartItems } = useContext(ShopContext);
  const cartItemCount = Object.values(cartItems).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <div className="NavbarComponent">
      <Navbar
        {...args}
        expand="md"
      >
        <NavbarBrand href="/">
          <Link to="/"><FaAtlassian style={{ height: 40, width: 100, color: 'black' }} /></Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar >
            <ul className="navbar-nav" style={{ marginLeft: '60%', fontSize: '20px', color: 'black' }}>
              <li class="nav-item">
                <Link class="nav-link " to="/Shop"><b>Shop</b> </Link>
              </li>
              {/* Update your JSX with the added class names */}
              <li className="nav-item cart-link">
                <Link className="nav-link" to="/cart">
                <ShoppingCartSimple style={{ color: "black" }} size={25} />
                                  {cartItemCount > 0 && (
                    <span className="cart-item-count">{cartItemCount}</span>
                  )}
                </Link>
              </li>
&nbsp;
              <li class="nav-item">
                <Link class="nav-link " to="/">
                  {/* <b>Logout</b> */}
                  <SignOut style={{ color: "black" }} size={25} />                </Link>
              </li>
            </ul>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;

// import React, { useState, useContext } from "react";
// import { FaAtlassian } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { ShopContext } from "./shop-context";
// import "./Nav.css";
// import {
//   Navbar,
//   NavbarBrand,
//   Nav,
//   NavbarToggler,
//   Collapse,
// } from "reactstrap";

// function NavbarComponent(args) {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const { cartItems } = useContext(ShopContext);
//   const cartItemCount = Object.values(cartItems).reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );

//   return (
//     <div className="NavbarComponent">
//       <Navbar
//         {...args}

//         expand="md"
//       >
//         <NavbarBrand href="/">
//           <Link to="/"><FaAtlassian style={{ height: 40, width: 100, color: 'black' }} /></Link>
//         </NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar >
//             <ul className="navbar-nav" style={{ marginLeft: '60%', fontSize: '20px', color: 'black', paddingLeft: '1500%' }}>
//             <li className="nav-item">
//               <Link className="nav-link" to="/cart">
//                 <ShoppingCart style={{ color: "black" }} size={25} />
//                 {cartItemCount > 0 && (
//                   <span className="cart-item-count">{cartItemCount}</span>
//                 )}
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link class="nav-link " to="/"><LogoutIcon style={{ color: 'black' }} size={25} /></Link>                                 </li>

//           </ul>

//         </Nav>

//       </Collapse>
//     </Navbar>
// </div>
// );
// }

// export default NavbarComponent;


