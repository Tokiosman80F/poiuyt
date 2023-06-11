import { useEffect, useState } from "react";

import "./Shop.css";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import { addToDb } from "../../utilities/fakedb";
import { getShoppingCart } from "../../utilities/fakedb";

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
    addToDb(product.id);
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1 : getting the id => explain; we use for in for getting the id from local storage
    for (const id in storedCart) {
      //step 2: getting the product using the id
      const addedProduct = products.find((product) => product.id === id);
<<<<<<< HEAD
      // console.log(addedProduct);
=======
      console.log(addedProduct);
>>>>>>> 4bdd1a9331736c6b0d10133311b1824c8abd6e4b
      if (addedProduct) {
        // step 3: found and added quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        console.log(quantity);
        // step 4:addedProduct is pushed to the array of savedCart
        savedCart.push(addedProduct);
      }
      setCart(savedCart);
    }
  }, [products]);
  return (
    <div className="products-view-container">
      <div className="heading">
        <h1>Shop Men Collection</h1>
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
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
