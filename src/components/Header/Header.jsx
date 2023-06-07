import "./Header.css";
import icon from "../../images/POIUYT.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      {/* <div className="logo"># poiuyt</div> */}
      <img src={icon} alt="" />
      <div>
        <Link to="/">shop</Link>
        <Link to="/orders">orders</Link>
        <Link to="/inventory">inventory</Link>
        <Link to="/login">login</Link>
      </div>
    </nav>
  );
};

export default Header;
