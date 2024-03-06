import React from "react";
import check from "../../assets/check.png";
import "./check.scss";

function Check() {
    return (
        <div>
            <div className="container">
                <div className="check">
                    <div className="check__card">
                        <h1 className="check__card__title">
                            Спасибо за покупку{" "}
                        </h1>
                        <img src={check} alt="" className="check__card__img" />
                        <p className="check__card__desc">
                            Наш менеджер свяжится с Вами в ближайшее время
                        </p>
                    </div>
                    <div className="check__detail">
                        <h1 className="check__detail__title">Детали заказа</h1>
                        <p className="check__detail__text">
                            Iphone 14 Pro max 256gb Gold <br /> <br />
                            74500 сом
                            <br /> <br />
                            Самовывоз
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Check;
