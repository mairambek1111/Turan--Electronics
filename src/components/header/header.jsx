import { Link } from "react-router-dom";
import Headerlogo from "../../assets/header-logo.svg";
import Logoimage from "../../assets/logo-image.svg";
import iconhelp from "../../assets/header-btn-help.svg";
import iconbasket from "../../assets/header-btn-basket.svg";
import iconprofile from "../../assets/header-btn-profile.svg";
import iconsearch from "../../assets/header-search.svg";
import burgermenu from "../../assets/burger-menu.svg";
import "./header.scss";
function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="burger__menu__img__wrap">
              <img src={burgermenu} alt="" />
            </div>
            <div className="header__info">
              <div className="search__header">
                <img src={iconsearch} alt="" />
              </div>
              <div>
                <img src={Logoimage} alt="" className="logoimage" />
              </div>
              <a href="#" className="logo">
                <img src={Headerlogo} alt="" className="header__logo" />
              </a>
              <div className="logo__img__wrap">
                <img src={iconbasket} alt="" />
              </div>
              <div className="header-info__btns">
                <div className="header__nav__btns">
                  <button className="header__nav__btn__help">
                    <img
                      src={iconhelp}
                      alt=""
                      className="header__nav__icon__help"
                    />
                  </button>
                  <button className="header__nav__btn">
                    <img
                      src={iconbasket}
                      alt=""
                      className="header__nav__icon__btn"
                    />
                  </button>
                  <button className="header__nav__btn__profile">
                    <img
                      src={iconprofile}
                      alt=""
                      className="header__nav__icon__profile"
                    />
                  </button>
                </div>
                <form action="#" className="">
                  <input
                    type="text"
                    placeholder="search..."
                    className="input"
                  />
                  <button className="input__icon__btn">
                    <img src={iconsearch} alt="" className="input__icon" />
                  </button>
                </form>
              </div>
            </div>

            <div className="header__info__link">
              <nav className="header__nav">
                <Link to="/" className="header__nav__link">
                  Главная
                </Link>
                <Link to="/" className="header__nav__link">
                  Категории
                </Link>
                <Link to="/" className="header__nav__link">
                  Новости
                </Link>
                <Link to="/" className="header__nav__link">
                  О нас
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
