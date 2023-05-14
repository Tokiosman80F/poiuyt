import "./Header.css";
import icon from "../../images/POIUYT.png";
const Header = () => {
  return (
    <nav className="header">
      {/* <div className="logo"># poiuyt</div> */}
      <img src={icon} alt="" />
      <div>
        <a href="/shop">shop</a>
        <a href="/order">order</a>
        <a href="/inventory">inventory</a>
        <a href="/login">login</a>
      </div>
    </nav>
  );
};

export default Header;
