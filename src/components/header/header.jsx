import { Link } from "react-router-dom";
import Headerlogo from "../../assets/header-logo.svg";
import Logoimage from "../../assets/logo-image.svg";
import iconfavorite from "../../assets/header-btn-help.svg";
import iconbasket from "../../assets/header-btn-basket.svg";
import iconprofile from "../../assets/header-btn-profile.svg";
import iconsearch from "../../assets/header-search.svg";
import burgermenu from "../../assets/burger-menu.svg";
import "./header.scss";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

function Header() {
  const [nav, setNav] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [basketCount, setBasketCount] = useState(0);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:3000/favorite");
        const count = response.data.length;
        setFavoriteCount(count);
      } catch (error) {
        console.error("Ошибка при получении избранных элементов:", error);
      }
    };
    fetchFavorites();
  }, []);
  return (
    <>
      <header className="header" data-aos="zoom-out" data-aos-duration="1100">
        <div className="container ">
          <div className="header__content">
            <div
              onClick={() => setNav(!nav)}
              className="burger__menu__img__wrap"
            >
              {" "}
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
                      {favoriteCount !== 0 ? (
                        <p className="favCount">{favoriteCount}</p>
                      ) : null}
                    </Link>
                  </button>
                  <button className="header__nav__btn">
                    <Link to="/headerBasket">
                      <img
                        src={iconbasket}
                        alt=""
                        className="header__nav__icon__btn"
                      />
                      {basketCount !== 0 ? (
                        <p className="basketCount">{basketCount}</p>
                      ) : null}
                    </Link>
                  </button>
                  <button className="header__nav__btn__profile">
                    <Link to="/register">
                      <img
                        src={iconprofile}
                        alt=""
                        className="header__nav__icon__profile"
                      />
                    </Link>
                  </button>
                </div>
                <div className="input__form">
                  <input
                    type="text"
                    placeholder="search..."
                    className="input"
                  />
                  <button className="input__icon__btn">
                    <img src={iconsearch} alt="" className="input__icon" />
                  </button>
                </div>
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
                  <Link to="/pageskategory" className="header__nav__link">
                    Категории
                  </Link>
                </button>

                <button className="header__nav-btn">
                  <Link to="/pagesNews" className="header__nav__link">
                    Новости
                  </Link>
                </button>
                <button className="header__nav-btn">
                  <Link to="/pagesAboutus" className="header__nav__link">
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
