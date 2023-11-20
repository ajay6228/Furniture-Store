

import React from "react";
import { PRODUCTS } from "../products";
import { Product } from "./product";
import './ShopPage.css'
import Navbar from "./Navbar"

export const ShopPage = () => {
  return (

<div className="shop">
 <Navbar/> 
      <div className="shopTitle">
        <h1>AJAY FURNITURE SHOP</h1>
      </div>

       {/* Displaying the products  */}
      <div className="products">
        {PRODUCTS.map((product) => (

          // returning the product
          <Product data={product} />   
        ))}
      </div>
    </div>
  );
};