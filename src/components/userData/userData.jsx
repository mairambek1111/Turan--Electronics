import React from "react";
import "./userData.scss";

function UserData() {
    return (
        <div>
            <div className="container">
                <div className="userData">
                    <h1 className="userData__title">Способ получения</h1>
                    <h1 className="userData__account">У меня есть аккаунт</h1>
                </div>
                <div className="userInput">
                    <input
                        type="text"
                        placeholder="Фамилия и имя"
                        className="userInput__firstInput"
                    />
                    <div className="userInput__secondInput">
                        <input
                            type="text"
                            placeholder="Телефон"
                            className="userInput__phone"
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            className="userInput__email"
                        />
                    </div>
                    <h1 className="btn__request">Зарегистрироваться</h1>
                </div>
                <div className="registration">
                    <h1 className="registration__btn">Зарегистрироваться</h1>
                </div>

                <div className="userData__card">
                    <div className="userData__card__one">
                        <h1 className="userData__card__oneData">Самовывоз</h1>

                        <div className="userData__card__address">
                            г.Бишкек ул.Ахунбаева 132 <br />
                            пн-вс 09:00-20:00
                        </div>

                        <h1 className="userData__card__price">Бесплатно</h1>
                    </div>
                    <hr />
                    <div className="userData__card__two">
                        <h1 className="userData__card__oneData">Доставка</h1>
                        <div className="userData__card__inputs">
                            <div className="selects">
                                <select>
                                    <option value="" hidden disabled selected>
                                        Область
                                    </option>
                                    <option>Чуй</option>
                                    <option>Иссык-Куль</option>
                                    <option>Нарын</option>
                                    <option>Баткен</option>
                                    <option>Джалал-Абад</option>
                                    <option>Ош</option>
                                    <option>Талас</option>
                                </select>

                                <select>
                                    <option value="" hidden disabled selected>
                                        Город
                                    </option>
                                    <option>Бишкек</option>
                                    <option>Каракол</option>
                                    <option>Нарын</option>
                                    <option>Баткен</option>
                                    <option>Джалал-Абад</option>
                                    <option>Ош</option>
                                    <option>Талас</option>
                                </select>
                            </div>
                            <div className="inputs">
                                <input
                                    type="text"
                                    placeholder="Улица"
                                    className="streetInput"
                                />
                                <input
                                    type="text"
                                    placeholder="Дом/кв"
                                    className="streetInput"
                                />
                            </div>
                        </div>

                        <h1 className="userData__card__price">Бесплатно</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserData;
