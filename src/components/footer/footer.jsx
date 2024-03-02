import footerlogo from "../../assets/header-logo.svg";
import facebookicon from "../../assets/facebook.svg";
import twittericon from "../../assets/twitter.svg";
import instagramicon from "../../assets/instagram.svg";
import "./footer.scss";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__info">
              <div className="footer__logo">
                <img src={footerlogo} alt="" />
              </div>
              <p className="footer__info__text">
                Turan Electronics - ваш идеальный магазин для шопинга.
                Обнаружьте последние тренды, выбирайте изысканные товары,
                оформляйте заказы с легкостью. Элегантный дизайн, безопасные
                платежи и быстрая доставка - все, что вам нужно для приятного
                онлайн-шопинга. Превратите свои желания в реальность с нами!
              </p>
            </div>
            <div className="footer__info__social">
              <div className="footer__wrap__img">
                <img src={facebookicon} alt="" />
              </div>
              <div className="footer__wrap__img">
                <img src={twittericon} alt="" />
              </div>
              <div className="footer__wrap__img">
                <img src={instagramicon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
