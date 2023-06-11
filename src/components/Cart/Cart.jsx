import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  // console.log("carts =>", cart);
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 3) / 100;
  const grandTotal = tax + total + totalShipping;
  // console.log(total);
  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>Product selected:{quantity} </p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>

      <h3>Grand Total :${grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
