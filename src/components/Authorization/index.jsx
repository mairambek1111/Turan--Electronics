import "./Authorization.scss";
import { Link } from "react-router-dom";
import registerImage from "../../assets/register.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { useState } from "react";
import Register from "../Register";
import Header from "../header/header";

const Authorization = () => {
  const [active, setActive] = useState(false);
  const [eye, setEye] = useState("password");
  const [showRegister, setShowRegister] = useState(false);

  const handleEye = () => {
    if (eye === "password") {
      setEye("text");
    } else {
      setEye("password");
    }
  };

  function iValue() {
    const iPass = document.querySelector(".iPass");
    const iEmail = document.querySelector(".iEmail");
    if (iPass.value.trim() === "") {
      iPass.style.border = "1px solid red";
    } else {
      iPass.style.border = "1px solid #a7c957";
    }
    if (iEmail.value.trim() === "") {
      iEmail.style.border = "1px solid red";
    } else {
      iEmail.style.border = "1px solid #a7c957";
    }
  }
  const btnActive = () => {
    setActive(true);
    iValue();
  };
  const validation = () => {
    if (active === true) {
      iValue();
    }
  };

  return (
    <>
      <Header />
      {showRegister === false && (
        <div id="authorization">
          <div className="container">
            <h1>Авторизация</h1>
            <div className="authorization">
              <div className="authorization__header">
                <p>
                  Авторизуйтесь, указав свои контактные данные, или
                  воспользовавшись перечисленными сервисами
                </p>
              </div>
              <div className="authorization__inputs">
                <input
                  onInput={validation}
                  className="iEmail"
                  type="text"
                  placeholder="Email или телефон ..."
                />
                <div className="authorization__inputs--pass">
                  <input
                    onInput={validation}
                    className="iPass"
                    type={eye}
                    placeholder="Пароль"
                  />
                  {eye === "password" ? (
                    <FaEyeSlash onClick={handleEye} className="passEye" />
                  ) : (
                    <FaEye onClick={handleEye} className="passEye" />
                  )}
                </div>
                <Link>Забыли пароль?</Link>
              </div>
              <div className="authorization__button">
                <button onClick={btnActive}>Войти</button>
              </div>
              <div className="authorization__links">
                <h2>Впервые у нас? </h2>
                <Link onClick={() => setShowRegister(true)}>Регистрация</Link>
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
        </div>
      )}
      {showRegister && <Register />}
    </>
  );
};

export default Authorization;
