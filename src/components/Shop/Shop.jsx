import React, { useEffect, useState } from "react";

import "./Shop.css";
import Products from "../Products/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddtoCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="products-view-container">
      <div className="heading">
        <h1>Shop Men's Collection</h1>
        <hr />
      </div>

      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Products
              key={product.id}
              product={product}
              handleAddtoCart={handleAddtoCart}
            ></Products>
          ))}
        </div>
        <div className="cart-container">
          <h1>Cart</h1>
          <p>Product selected:{cart.length} </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
