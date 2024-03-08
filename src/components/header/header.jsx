import { Link } from "react-router-dom";
import Headerlogo from "../../assets/header-logo.svg";
import Logoimage from "../../assets/logo-image.svg";
import iconfavorite from "../../assets/header-btn-help.svg";
import iconbasket from "../../assets/header-btn-basket.svg";
import iconprofile from "../../assets/header-btn-profile.svg";
import iconsearch from "../../assets/header-search.svg";
import burgermenu from "../../assets/burger-menu.svg";
import "./header.scss";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
function Header() {
  const [nav, setNav] = useState(false);
  console.log(nav);
  return (
    <>
      <header className="header" data-aos="zoom-out" data-aos-duration="1100">
        <div className="container ">
          <div className="header__content">
            <div
              onClick={() => setNav(!nav)}
              className="burger__menu__img__wrap"
            >
              {nav ? (
                <IoMdClose size={25} className="menu-close-btn" />
              ) : (
                <img src={burgermenu} alt="" />
              )}
            </div>
            <div className="header__info">
              <div className="search__header">
                <img src={iconsearch} alt="" />
              </div>
              <div>
                <img src={Logoimage} alt="" className="logoimage" />
              </div>
              <Link to="/" className="logo">
                <img src={Headerlogo} alt="" className="header__logo" />
              </Link>
              <Link to="/headerBasket">
                <img src={iconbasket} alt="" className="logo__img__wrap" />
              </Link>
              <div className="header-info__btns">
                <div className="header__nav__btns">
                  <button className="header__nav__btn__help">
                    <Link to="/headerFavorite">
                      <img
                        src={iconfavorite}
                        alt=""
                        className="header__nav__icon__help"
                      />
                    </Link>
                  </button>
                  <button className="header__nav__btn">
                    <Link to="/headerBasket">
                      <img
                        src={iconbasket}
                        alt=""
                        className="header__nav__icon__btn"
                      />
                    </Link>
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
              <nav className={`header__nav ${nav ? "active" : ""}`}>
                <button className="header__nav-btn">
                  <Link to="/" className="header__nav__link">
                    Главная
                  </Link>
                </button>

                <button className="header__nav-btn">
                  <Link to="/" className="header__nav__link">
                    Категории
                  </Link>
                </button>

                <button className="header__nav-btn">
                  <Link to="/" className="header__nav__link">
                    Новости
                  </Link>
                </button>
                <button className="header__nav-btn">
                  <Link to="/" className="header__nav__link">
                    О нас
                  </Link>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
