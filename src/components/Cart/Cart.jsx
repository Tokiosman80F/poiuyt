import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log("carts =>", cart);
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (total * 3) / 100;
  const grandTotal = tax + total + totalShipping;
  console.log(total);
  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>Product selected:{cart.length} </p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>

      <h3>Grand Total :${grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
