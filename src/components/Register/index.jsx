import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import registerImage from "../../assets/register.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Register() {
  return (
    <>
      <div id="register">
        <h1>Регистрация</h1>
        <div className="register">
          <div className="register__header">
            <p>
              Авторизуйтесь, указав свои контактные данные, или воспользовавшись
              перечисленными сервисами
            </p>
          </div>
          <div className="register__inputs">
            <input type="text" placeholder="Email или телефон ..." />
            <input type="password" placeholder="Пароль" />
            <input type="password" placeholder="Потвердить пароль" />
            <input type="text" placeholder="Email или телефон ..." />
            <div className="register__inputs-check">
              <input type="checkbox" id="check" />
              <label htmlFor="check">
                Я согласен с <Link> условиями обработки</Link> персональных
                данных
              </label>
            </div>
          </div>
          <div className="register__button">
            <button>Регистрация</button>
          </div>
          <div className="register__links">
            <h2>Уже регистрировались? </h2>
            <Link>Войти</Link>
          </div>
          <img src={registerImage} alt="" />
          <div className="register__network">
            <p>Войти через</p>
            <div className="register__network-link">
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

      <div id="enter">
        <h1>Регистрация</h1>

        <div className="enter">
          <div className="enter__header">
            <p>
              Авторизуйтесь, указав свои контактные данные, или воспользовавшись
              перечисленными сервисами
            </p>
          </div>
          <div className="enter__network">
            <div className="enter__network-link">
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
            <img src={registerImage} alt="" />
            <div className="enter__number">
              <p>
                На номер телефона (070) 509-00-07 отправлено SMS-сообщение для
                подтверждения регистрации.
              </p>
            </div>
          </div>
          <div className="enter__inputs">
            <input type="text" placeholder="Проверочный код" />
          </div>
          <div className="enter__request">
            <p>Вы можете запросить код через 00:28.</p>
          </div>
          <div className="enter__button">
            <button>Регистрация</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
