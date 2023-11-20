import React, { useContext } from "react";
import { ShopContext } from "./shop-context";
import { PRODUCTS } from "../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";
import Navbar from "./Navbar"

export const Cart = () => {

  const navigate = useNavigate();

  const handleShop = () => {
    navigate("/Shop");
    };
    
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();


  return (
    <div className="cart">
      <Navbar/>
      <div style={{paddingTop:'8%'}}>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout" >
         <b style={{fontSize: '20px'}}> <p > Subtotal: ${totalAmount} </p> </b>
          <button className='btn btn-primary' onClick={handleShop}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Proceed 
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};