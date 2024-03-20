import { useState, useRef, useEffect } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import registerImage from "../../assets/register.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
// import Enter from "../Enter/Enter";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Authorization from "../Authorization";
// import Header from "../header/header";

export default function Register() {
  const [showEnter, setShowEnter] = useState(false);
  const [eye, setEye] = useState("password");
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const iNameRef = useRef(null);
  const iPassRef = useRef(null);
  const iPass2Ref = useRef(null);
  const iEmailRef = useRef(null);

  const handleEye = () => {
    if (eye === "password") {
      setEye("text");
    } else {
      setEye("password");
    }
  };

  function iValue() {
    if (iNameRef.current.value.trim() === "") {
      iNameRef.current.style.border = "1px solid red";
    } else {
      iNameRef.current.style.border = "2px solid #a7c957";
    }
    if (iPassRef.current.value.trim() === "") {
      iPassRef.current.style.border = "1px solid red";
    } else {
      iPassRef.current.style.border = "2px solid #a7c957";
    }
    if (iPass2Ref.current.value.trim() === "") {
      iPass2Ref.current.style.border = "1px solid red";
    } else {
      iPass2Ref.current.style.border = "2px solid #a7c957";
    }
    if (iEmailRef.current.value.trim() === "") {
      iEmailRef.current.style.border = "1px solid red";
    } else {
      iEmailRef.current.style.border = "2px solid #a7c957";
    }
  }
  // function getCookie(name) {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(";").shift();
  // }

  // const instance = axios.post({
  //   baseURL: "http://localhost:8000/",
  //   timeout: 10000,
  //   headers: {
  //     "X-CSRFToken": getCookie("csrftoken"),
  //     "Content-Type": "application/json",
  //   },
  // });

  function HandleButtonClick() {
    btnActive();
    handleSubmit();
  }

  const btnActive = () => {
    setActive(true);
    iValue();
  };

  useEffect(() => {
    handleSubmit();
  }, []);
  const handleSubmit = () => {
    axios
      .post("http://127.0.0.1:8000/user/", {
        username: iNameRef.current.value.trim(),
        password: iPassRef.current.value.trim(),
        email: iEmailRef.current.value.trim(),
      })
      .then((res) => {
        console.log("Успешно:", res.data);
        localStorage.setItem("users", JSON.stringify(res.data.email));

        navigate("/authorization");
      });
  };

  const validation = () => {
    if (active === true) {
      iValue();
    }
  };

  return (
    <>
      {showEnter && <Authorization />}
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
                  ref={iNameRef}
                  className="iName"
                  type="text"
                  placeholder="Имя"
                  onInput={validation}
                />
                <div className="register__inputs--pass">
                  <input
                    ref={iPassRef}
                    className="iPass"
                    type={eye}
                    placeholder="Пароль"
                    onInput={validation}
                  />
                  {eye === "password" ? (
                    <FaEyeSlash onClick={handleEye} className="passEye" />
                  ) : (
                    <FaEye onClick={handleEye} className="passEye" />
                  )}
                </div>
                <div className="register__inputs--pass">
                  <input
                    ref={iPass2Ref}
                    className="iPass2"
                    type={eye}
                    placeholder="Потвердить пароль"
                    onInput={validation}
                  />
                  {eye === "password" ? (
                    <FaEyeSlash onClick={handleEye} className="passEye" />
                  ) : (
                    <FaEye onClick={handleEye} className="passEye" />
                  )}
                </div>
                <input
                  ref={iEmailRef}
                  className="iEmail"
                  type="text"
                  placeholder="Email или телефон ..."
                  onInput={validation}
                />
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
                <button onClick={HandleButtonClick}>Регистрация</button>
              </div>
              <div className="register__links">
                <h2>Уже регистрировались? </h2>
                <Link onClick={() => setShowEnter(true)}>Войти</Link>
              </div>
              <img src={registerImage} alt="" />
              <div className="register__network">
                <Link to="/">
                  <p>Войти через</p>
                </Link>
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
