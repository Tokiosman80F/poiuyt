import "./ReviewItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ReviewItems = ({ product }) => {
  console.log(product);
  const { id, img, price, name, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-detail">
        <p>{name}</p>
        <p>
          Price: <span className="orange-text">${price}</span>
        </p>
        <p>Order-quantity{quantity}</p>
      </div>
      <button className="btn-delete">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default ReviewItems;
