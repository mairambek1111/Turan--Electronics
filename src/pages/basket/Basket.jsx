import "../basket/basket.scss";
import Recomendation from "../../components/recomendation/Recomendation.jsx";
import Header from "../../components/header/header.jsx";
import Order from "../../components/order/order.jsx";
import UserData from "../../components/userData/userData.jsx";
import Footer from "../../components/footer/footer.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";

const Basket = () => {
  const [userData, setUserData] = useState(false);
  const { basket } = useSelector((state) => state.basket);

  return (
    <>
      <Header />
      {basket.length !== 0 ? <Order setUserData={setUserData} /> : null}
      {userData ? <UserData /> : null}
      <div id="basket">
        <div className="container">
          <div className="basket">
            {basket.length === 0 ? (
              <div className="basket--none">
                <h2>Ваша корзина пуста</h2>
              </div>
            ) : null}
          </div>
        </div>
        <Recomendation />
      </div>
      <Footer />
    </>
  );
};

export default Basket;
