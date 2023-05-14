import React from "react";
import "./Products.css";
const Products = (props) => {
  const { category, id, img, name, price, ratings } = props.product;
  return (
    <div className="products">
      <img src={img} alt="" />
    </div>
  );
};

export default Products;
