import React from "react";
import "./Products.css";
const Products = (props) => {
  const { category, id, img, name, price, ratings, seller } = props.product;
  return (
    <div className="products">
      <img src={img} alt="" />
      <div className="products-info">
        <h6 className="products-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer:{seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button className="products-btn">Add To Cart</button>
    </div>
  );
};

export default Products;
