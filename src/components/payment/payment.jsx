import React from "react";
import card1 from "../../assets/bankCard.png";
import card2 from "../../assets/electron.png";
import card3 from "../../assets/cash.png";
import card4 from "../../assets/depozit.png";
import "./payment.scss";

function Payment() {
    return (
        <div>
            <div className="container">
                <div className="payment">
                    <h1 className="payment__title">Способ оплаты</h1>

                    <div className="payment__cards">
                        <img src={card1} alt="" className="payment__card" />

                        <img src={card2} alt="" className="payment__card" />

                        <img src={card3} alt="" className="payment__card" />

                        <img src={card4} alt="" className="payment__card" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
