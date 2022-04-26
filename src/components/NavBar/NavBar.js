import "./NavBar.css";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
const NavBar = () => {
  const { cart } = useContext(CartContext);
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__nav__link" to="/">
          <img className="header__nav__link__img" src="./images/skullcandy-logo.svg" alt="skullcandy logo" />
        </Link>
        <ul className="header__nav__menu">
          <li className="header__nav__menu__item">
            <Link className="header__nav__menu__item__link" to="/category/truewireless">True wireless</Link>
          </li>
          <li className="header__nav__menu__item">
            <Link className="header__nav__menu__item__link" to="/category/earbuds">Earbuds</Link>
          </li>
          <li className="header__nav__menu__item">
            <Link className="header__nav__menu__item__link" to="/category/headphones">Headphones</Link>
          </li>
        </ul>
        {cart.length > 0 ? <CartWidget /> : <div className="carrito"></div>}
      </nav>
    </header>
  );
};

export default NavBar;
