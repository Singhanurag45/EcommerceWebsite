import React, {useContext,  useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/" className="nav-link">
            Shop
          </Link>
          {menu === "shop" && <hr className="nav-menu-hr" />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men" className="nav-link">
            Men
          </Link>
          {menu === "men" && <hr className="nav-menu-hr" />}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/womens" className="nav-link">
            Women
          </Link>
          {menu === "women" && <hr className="nav-menu-hr" />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" className="nav-link">
            Kids
          </Link>
          {menu === "kids" && <hr className="nav-menu-hr" />}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
