import React, { useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import registerImage from "../../assets/register.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import Enter from "./Enter";

export default function Register() {
  const [showEnter, setShowEnter] = React.useState(false);
  const [eye, setEye] = useState("password");

  const handleEye = () => {
    if (eye === "password") {
      setEye("text");
    } else {
      setEye("password");
    }
  };

  return (
    <>
      {showEnter && <Enter />}
      {showEnter === false && (
        <div id="register">
          <div className="container">
            <h1>Регистрация</h1>
            <div className="register">
              <div className="register__header">
                <p>
                  Авторизуйтесь, указав свои контактные данные, или
                  воспользовавшись перечисленными сервисами
                </p>
              </div>
              <div className="register__inputs">
                <input
                  type="text"
                  placeholder="Имя"
                  onChange={(event) => {
                    event.target.value === ""
                      ? border.style.border
                      : "1px solid red";
                  }}
                />
                <div className="register__inputs--pass">
                  <input type={eye} placeholder="Пароль" />
                  {eye === "password" ? (
                    <FaEyeSlash onClick={handleEye} className="passEye" />
                  ) : (
                    <FaEye onClick={handleEye} className="passEye" />
                  )}
                </div>
                <div className="register__inputs--pass">
                  <input type={eye} placeholder="Потвердить пароль" />
                  {eye === "password" ? (
                    <FaEyeSlash onClick={handleEye} className="passEye" />
                  ) : (
                    <FaEye onClick={handleEye} className="passEye" />
                  )}
                </div>
                <input type="text" placeholder="Email или телефон ..." />
                <div className="register__inputs--check">
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">
                    <p>
                      Я согласен с <Link> условиями обработки </Link>
                      персональных данных
                    </p>
                  </label>
                </div>
              </div>
              <div className="register__button">
                <button>Регистрация</button>
              </div>
              <div className="register__links">
                <h2>Уже регистрировались? </h2>
                <Link onClick={() => setShowEnter(true)}>Войти</Link>
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
        </div>
      )}
    </>
  );
}
