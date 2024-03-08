import React, { useEffect, useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import registerImage from "../../assets/register.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
// import { useFormAction } from "react-router-dom";
// import { useState } from "react";

function Enter() {
  const [timeLeft, setTimeLeft] = useState(1 * 60);
  const [isCounting, setIsCounting] = useState(false);
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const secunds = getPadTime(timeLeft - minutes * 60);

  function getPadTime(time) {
    return time.toString().padStart(2, "0");
  }

  function handlStart() {
    timeLeft ? setIsCounting(true) : setIsCounting(false), setTimeLeft(1 * 60);
  }

  // function handlReset() {
  //   setIsCounting(false);
  //   setTimeLeft(1 * 60);
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isCounting]);


  return (
    <div id="enter">
      <div className="container">
        <center>
          <h1>Регистрация</h1>
        </center>

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
            <p>
              Вы можете запросить код через {minutes}:{secunds}.
            </p>
            <p
              style={{
                margin: "5px 0",
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationStyle: "dashed",
              }}
              onClick={handlStart}>
              {timeLeft ? "Получить код" : "Не получили код?"}
            </p>
          </div>
          <div className="enter__button">
            <button>Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Register() {
  function checkCode() {
    let str = number.value;
    if (str.length < 6) {
      number.value.slice(0, 19);
    } else {
      str = str.replace(/-/g, "");
      let res = "";
      for (let i = 0; i < str.length; i++) {
        if (i !== 0 && i % 4 === 0) {
          res += "-";
        }
        res += str[i];
      }
      number.value = res;
    }
  }
  return (
    <>
      {/* <Enter /> */}
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
            <input type="text" placeholder="Имя" onChange={() => checkCode()} />
            <input type="password" placeholder="Пароль" />
            <input type="password" placeholder="Потвердить пароль" />
            <input type="text" placeholder="Email или телефон ..." />
            <div className="register__inputs-check">
              <input type="checkbox" id="check" />
              <label htmlFor="check">
                <p>
                  Я согласен с <Link> условиями обработки</Link> персональных
                  данных
                </p>
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
    </>
  );
}
