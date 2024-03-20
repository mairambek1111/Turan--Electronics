import footerlogo from "../../assets/header-logo.svg";
import facebookicon from "../../assets/facebook.svg";
import twittericon from "../../assets/twitter.svg";
import instagramicon from "../../assets/instagram.svg";
import iconadres from "../../assets/footer.adres.svg";
import iconwork from "../../assets/footer.work.svg";
import icontel from "../../assets/footer-tel.svg";
import iconemail from "../../assets/footer-email.svg";
import iconadaptive from "../../assets/icon-adaptive.svg";
import iconadaptive2 from "../../assets/iconadaptive2.svg";
import iconadaptive3 from "../../assets/header-btn-help.svg";
import iconadaptive4 from "../../assets/header-btn-profile.svg";
import "./footer.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__adaptive__content">
            <div className="footer__adaptive__content__info">
              <button className="adaptive__content">
                <Link to="/">
                  <img src={iconadaptive} alt="" />
                </Link>
              </button>
              <button className="adaptive__content">
                <img src={iconadaptive2} alt="" />
              </button>
              <button className="adaptive__content">
                <Link to="/headerFavorite">
                  <img src={iconadaptive3} alt="" />
                </Link>
              </button>
              <button className="adaptive__content">
                <img src={iconadaptive4} alt="" />
              </button>
            </div>
          </div>
          <div className="footer__content">
            <div className="footer__info">
              <div
                className="footer__logo"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1100"
              >
                <img
                  src={footerlogo}
                  alt=""
                  className="footer-logo__img__wrap"
                />
              </div>
              <p
                className="footer__info__text"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1100"
              >
                Turan Electronics - ваш идеальный магазин для шопинга.
                Обнаружьте последние тренды, выбирайте изысканные товары,
                оформляйте заказы с легкостью. Элегантный дизайн, безопасные
                платежи и быстрая доставка - все, что вам нужно для приятного
                онлайн-шопинга. <br />
                <br /> Превратите свои желания в реальность с нами!
              </p>
            </div>
            <div className="footer__info__social">
              <div
                className="footer__wrap__img"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1100"
              >
                <img src={facebookicon} alt="" className="footer-social-img" />
              </div>
              <div
                className="footer__wrap__img"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1100"
              >
                <img src={twittericon} alt="" className="footer-social-img" />
              </div>
              <div
                className="footer__wrap__img"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1100"
              >
                <Link to={'https://www.instagram.com/ggsomebody/'}><img src={instagramicon} alt="" className="footer-social-img" /></Link>
              </div>
            </div>
            <div className="footer-info__text">
              <div className="footer-info__contacts">
                <h2
                  className="footer-info__contacts__title"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1100"
                >
                  Контакты
                </h2>
                <hr className="hr" />

                <p
                  className="footer-info-contacts__adres"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1100"
                >
                  <img src={iconadres} alt="" />
                  Кыргызстан г. Бишкек ㅤㅤул.Киевская 168, 720001
                </p>
                <p
                  className="footer-info-contacts__work"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1100"
                >
                  <img src={iconwork} alt="" />
                  Работаем каждый день с 10:00 до 20:00{" "}
                </p>
                <p
                  className="footer-info-contacts__tel"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1100"
                >
                  <img src={icontel} alt="" />
                  Тел: +99600000000 Смартфоны{" "}
                </p>
                <p
                  className="footer-info-contacts__email"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1100"
                >
                  <img src={iconemail} alt="" />
                  Email: info@turanelectronic.kg{" "}
                </p>
              </div>
              <div className="footer-info__contacts__info">
                <h2
                  className="footer-info__contacts__title"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1100"
                >
                  Информация
                </h2>
                <hr className="hr" />
                <div className="footer-contacts-info__block">
                  <Link
                    className="footer-info-contacts__text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    Система начислений КЭШБЕК
                  </Link>
                  <Link
                    className="footer-info-contacts__text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    О Нас
                  </Link>
                  <Link
                    className="footer-info-contacts__text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    Условия гарантии{" "}
                  </Link>
                  <Link
                    className="footer-info-contacts__text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    Условия кредитования{" "}
                  </Link>
                  <Link
                    className="footer-info-contacts__text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    Политика конфиденциальности{" "}
                  </Link>
                  <Link
                    className="footer-info-contacts__text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    Публичная оферта{" "}
                  </Link>
                  <Link
                    className="footer-info-contacts__text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    Контакты{" "}
                  </Link>
                </div>
              </div>
              <div className="footer-info__personal">
                <h2
                  className="footer-info__contacts__title"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1100"
                >
                  Личный Кабинет
                </h2>
                <hr className="hr" />
                <div className="footer-info-personal__block">
                  <Link to={'https://oceanbackend.pythonanywhere.com/admin/'}
                    className="footer-info__personal-text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    Личный Кабинет
                  </Link>
                  <Link
                    className="footer-info__personal-text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    История заказов
                  </Link>
                  <Link
                    className="footer-info__personal-text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    Закладки
                  </Link>
                  <Link
                    className="footer-info__personal-text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    Сравнить
                  </Link>
                  <Link
                    className="footer-info__personal-text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    Рассылка
                  </Link>
                  <Link
                    className="footer-info__personal-text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    Карта
                  </Link>
                  <Link
                    className="footer-info__personal-text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    сайта
                  </Link>
                  <Link
                    className="footer-info__personal-text"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1100"
                  >
                    Производители
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
