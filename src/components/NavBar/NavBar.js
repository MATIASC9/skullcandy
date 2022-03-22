import "./NavBar.css";
const NavBar = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <a className="header__nav__link" href="./index.html">
          <img className="header__nav__link__img" src="./images/skullcandy-logo.svg" alt="skullcandy logo" />
        </a>
        <ul className="header__nav__menu">
          <li className="header__nav__menu__item">
            <a className="header__nav__menu__item__link" href="./index.html">True wireless</a>
          </li>
          <li className="header__nav__menu__item">
            <a className="header__nav__menu__item__link" href="./index.html">Earbuds</a>
          </li>
          <li className="header__nav__menu__item">
            <a className="header__nav__menu__item__link" href="./index.html">Headphones</a>
          </li>
        </ul>
        <a className="header__nav__btnLogIn" href="./index.html">Log In</a>
      </nav>
    </header>
  );
};

export default NavBar;
