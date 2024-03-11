import "../basket/basket.scss";
import Recomendation from "../../components/recomendation/Recomendation.jsx";
import Header from "../../components/header/header.jsx";
import Order from "../../components/order/order.jsx";
import UserData from "../../components/userData/userData.jsx";
import Footer from "../../components/footer/footer.jsx";
import { useState } from "react";

const Basket = () => {
  const [userData, setUserData] = useState(false);
  return (
    <>
      <Header />
      <Order setUserData={setUserData} />
      {userData ? <UserData /> : null}
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
