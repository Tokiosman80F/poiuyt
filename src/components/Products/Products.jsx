// import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
  // console.log(props);

  const handleAddtoCart = props.handleAddtoCart;
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
      <button
        onClick={() => {
          handleAddtoCart(props.product);
        }}
        className="products-btn"
      >
        Add To Cart <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Products;
