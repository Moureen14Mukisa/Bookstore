import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1 style={{fontSize: {xs: "10px", sm: "40px"}}}><strong style={{color: 'blue'}}><u>MOREen </u>/</strong> BOOSTOre</h1>
      </div>

      <div className="products" style={{display: {sm: 'inline-flex', xs: 'block'}}}>
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
