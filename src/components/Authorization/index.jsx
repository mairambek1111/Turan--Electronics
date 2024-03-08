import React from "react";
import "./Authorization.scss";
import { Link } from "react-router-dom";
import registerImage from "../../assets/register.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Authorization = () => {
  return (
    <div id="authorization">
      <h1>Авторизация</h1>
      <div className="authorization">
        <div className="authorization__header">
          <p>
            Авторизуйтесь, указав свои контактные данные, или воспользовавшись
            перечисленными сервисами
          </p>
        </div>
        <div className="authorization__inputs">
          <input type="text" placeholder="Email или телефон ..." />
          <input type="password" placeholder="Пароль" />
          <Link>Забыли пароль?</Link>
        </div>
        <div className="authorization__button">
          <button>Войти</button>
        </div>
        <div className="authorization__links">
          <h2>Впервые у нас? </h2>
          <Link>Регистрация</Link>
        </div>
        <img src={registerImage} alt="" />
        <div className="authorization__network">
          <p>Войти через</p>
          <div className="authorization__network-link">
            <AiFillGoogleCircle
              style={{
                width: "33px",
                height: "33px",
              }}
            />
            <FaFacebook
              style={{
                width: "30px",
                height: "30px",
              }}
            />
            <FaTelegram
              style={{
                width: "30px",
                height: "30px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
