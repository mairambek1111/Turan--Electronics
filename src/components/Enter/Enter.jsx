import React, { useEffect, useState } from "react";
import "./Enter.scss";
import registerImage from "../../assets/register.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export default function Enter() {
  const [timeLeft, setTimeLeft] = useState(1 * 60);
  const [isCounting, setIsCounting] = useState(false);
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const secunds = getPadTime(timeLeft - minutes * 60);
  const [checkCoder, setCheckCoder] = React.useState("");

  const iEmail = localStorage.getItem("email");

  function getPadTime(time) {
    return time.toString().padStart(2, "0");
  }

  function handlStart() {
    timeLeft ? setIsCounting(true) : setIsCounting(false), setTimeLeft(1 * 60);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isCounting]);

  function getMessage(number) {
    let str = "" + number;

    if (str.length > 11) {
      str = str.slice(0, 11);
    } else {
      str = str.replace(/-/g, "");
      let res = "";
      for (let i = 0; i < str.length; i++) {
        if (i !== 0 && i % 3 === 0) {
          res += "-";
        }
        res += str.charAt(i);
      }
      str = res;
    }

    setCheckCoder(str);
  }

  return (
    <div id="enter">
      <div className="container">
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
            <img style={{ width: "200px" }} src={registerImage} alt="" />
            <div className="enter__number">
              {Number(iEmail) ? (
                <p>
                  На номер телефон {iEmail} отправлено SMS-сообщение для подтверждения
                  регистрации.
                </p>
              ) : (
                <p>
                  На почту {iEmail} отправлено сообщение для подтверждения
                  регистрации.
                </p>
              )}
            </div>
          </div>
          <div className="enter__inputs">
            <input
              type="text"
              placeholder="Проверочный код"
              onChange={(event) => getMessage(event.target.value)}
              value={checkCoder}
            />
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
            <button>Подтвердить</button>
          </div>
        </div>
      </div>
    </div>
  );
}
