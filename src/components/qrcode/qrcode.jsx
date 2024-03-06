import React from "react";
import "./qrcode.scss";
import qrcode from "../../assets/qrcode.png";

function Qrcode() {
    return (
        <div>
            <div className="container">
                <div className="qrcode">
                    <h1 className="qrcode__title">
                        Отсканируйте QR код с вашего электронного кошелька
                    </h1>
                    <img src={qrcode} alt="" className="qrcode__image" />
                    <button className="code__btn">Заказ оплачен</button>
                </div>

                <button className="qrcode__btn">Заказ оплачен</button>
            </div>
        </div>
    );
}

export default Qrcode;
