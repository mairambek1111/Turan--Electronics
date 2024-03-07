import footerlogo from "../../assets/header-logo.svg";
import facebookicon from "../../assets/facebook.svg";
import twittericon from "../../assets/twitter.svg";
import instagramicon from "../../assets/instagram.svg";
import iconadres from "../../assets/footer.adres.svg";
import iconwork from "../../assets/footer.work.svg";
import icontel from "../../assets/footer-tel.svg";
import iconemail from "../../assets/footer-email.svg";
import iconadaptive from "../../assets/icon-adaptive.svg";
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
                <img src={iconadaptive} alt="" />
              </button>
              <button className="adaptive__content">
                <img src={iconadaptive} alt="" />
              </button>
              <button className="adaptive__content">
                <img src={iconadaptive} alt="" />
              </button>
              <button className="adaptive__content">
                <img src={iconadaptive} alt="" />
              </button>
            </div>
          </div>
          <div className="footer__content">
            <div className="footer__info">
              <div className="footer__logo">
                <img
                  src={footerlogo}
                  alt=""
                  className="footer-logo__img__wrap"
                />
              </div>
              <p className="footer__info__text">
                Turan Electronics - ваш идеальный магазин для шопинга.
                Обнаружьте последние тренды, выбирайте изысканные товары,
                оформляйте заказы с легкостью. Элегантный дизайн, безопасные
                платежи и быстрая доставка - все, что вам нужно для приятного
                онлайн-шопинга. <br />
                <br /> Превратите свои желания в реальность с нами!
              </p>
            </div>
            <div className="footer__info__social">
              <div className="footer__wrap__img">
                <img src={facebookicon} alt="" className="footer-social-img" />
              </div>
              <div className="footer__wrap__img">
                <img src={twittericon} alt="" className="footer-social-img" />
              </div>
              <div className="footer__wrap__img">
                <img src={instagramicon} alt="" className="footer-social-img" />
              </div>
            </div>
            <div className="footer-info__text">
              <div className="footer-info__contacts">
                <h2 className="footer-info__contacts__title">Контакты</h2>
                <hr className="hr" />

                <p className="footer-info-contacts__adres">
                  <img src={iconadres} alt="" />
                  Кыргызстан г. Бишкек ㅤㅤул.Киевская 168, 720001
                </p>
                <p className="footer-info-contacts__work">
                  <img src={iconwork} alt="" />
                  Работаем каждый день с 10:00 до 20:00{" "}
                </p>
                <p className="footer-info-contacts__tel">
                  <img src={icontel} alt="" />
                  Тел: +99600000000 Смартфоны{" "}
                </p>
                <p className="footer-info-contacts__email">
                  <img src={iconemail} alt="" />
                  Email: info@turanelectronic.kg{" "}
                </p>
              </div>
              <div className="footer-info__contacts__info">
                <h2 className="footer-info__contacts__title">Информация</h2>
                <hr className="hr" />
                <div className="footer-contacts-info__block">
                  <Link className="footer-info-contacts__text">
                    Система начислений КЭШБЕК
                  </Link>
                  <Link className="footer-info-contacts__text">О Нас</Link>
                  <Link className="footer-info-contacts__text">
                    Условия гарантии{" "}
                  </Link>
                  <Link className="footer-info-contacts__text">
                    Условия кредитования{" "}
                  </Link>
                  <Link className="footer-info-contacts__text">
                    Политика конфиденциальности{" "}
                  </Link>
                  <Link className="footer-info-contacts__text">
                    Публичная оферта{" "}
                  </Link>
                  <Link className="footer-info-contacts__text">Контакты </Link>
                </div>
              </div>
              <div className="footer-info__personal">
                <h2 className="footer-info__contacts__title">Личный Кабинет</h2>
                <hr className="hr" />
                <div className="footer-info-personal__block">
                  <Link className="footer-info__personal-text">
                    Личный Кабинет
                  </Link>
                  <Link className="footer-info__personal-text">
                    История заказов
                  </Link>
                  <Link className="footer-info__personal-text">Закладки</Link>
                  <Link className="footer-info__personal-text">Сравнить</Link>
                  <Link className="footer-info__personal-text">Рассылка</Link>
                  <Link className="footer-info__personal-text">Карта</Link>
                  <Link className="footer-info__personal-text">сайта</Link>
                  <Link className="footer-info__personal-text">
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
