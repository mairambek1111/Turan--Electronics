import "../basket/basket.scss";
import Recomendation from "../../components/recomendation/Recomendation.jsx";
import Header from "../../components/header/header.jsx";
import Order from "../../components/order/order.jsx";
import UserData from "../../components/userData/userData.jsx";
import Payment from "../../components/payment/payment.jsx";
import Qrcode from "../../components/qrcode/qrcode.jsx";
import Check from "../../components/check/check.jsx";
import Footer from "../../components/footer/footer.jsx";

const Basket = () => {
  return (
    <>
      <Header />
      <Order />
      <UserData />
      <Payment />
      <Qrcode />
      <Check />
      <div id="basket">
        <div className="container">
          <div className="basket">
            <div className="basket--none">
              <h2>Ваша корзина пуста</h2>
            </div>
          </div>
        </div>
        <Recomendation />
      </div>
      <Footer />
    </>
  );
};

export default Basket;
