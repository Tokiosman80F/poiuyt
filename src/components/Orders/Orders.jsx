<<<<<<< HEAD
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const cart = useLoaderData();
  console.log(cart);
  return (
    <div className="shop-container">
      <div className="product-container">
        <h2>Orders page</h2>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
=======
const Orders = () => {
  return <div>This is Order page</div>;
>>>>>>> 4bdd1a9331736c6b0d10133311b1824c8abd6e4b
};

export default Orders;
