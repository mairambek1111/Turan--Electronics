import { useState, useRef } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../assets/register.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import axios from "axios";
import Authorization from "../Authorization/index.jsx";
import bcrypt from 'bcryptjs';

export default function Register() {
  const [showEnter, setShowEnter] = useState(false);
  const [eye, setEye] = useState("password");
  const [active, setActive] = useState(false);
  const iNameRef = useRef(null);
  const iPassRef = useRef(null);
  const iPass2Ref = useRef(null);
  const iEmailRef = useRef(null);
  const navigate = useNavigate();

  const handleEye = () => {
    setEye((prevEye) => (prevEye === "password" ? "text" : "password"));
  };

  function iValue() {
    if (iNameRef.current.value.trim() === "") {
      iNameRef.current.style.border = "1px solid red";
    } else {
      iNameRef.current.style.border = "1px solid #a7c957";
    }
    if (iPassRef.current.value.trim() === "" || iPassRef.current.value.trim() !== iPass2Ref.current.value.trim()) {
      iPassRef.current.style.border = "1px solid red";
    } else {
      iPassRef.current.style.border = "1px solid #a7c957";
    }
    if (iPass2Ref.current.value.trim() === "" || iPass2Ref.current.value.trim() !==iPassRef.current.value.trim()) {
      iPass2Ref.current.style.border = "1px solid red";
    } else {
      iPass2Ref.current.style.border = "1px solid #a7c957";
    }
    if (iEmailRef.current.value.trim() === "" || !iEmailRef.current.value.trim().endsWith("@gmail.com")) {
      iEmailRef.current.style.border = "1px solid red";
    } else {
      iEmailRef.current.style.border = "1px solid #a7c957";
    }
  }

  const btnActive = () => {
    // const iEmail = iEmailRef.current.value;
    // localStorage.setItem("email", iEmail);
    setActive(true);
    iValue();
  };

  function handlefunctions() {
    btnActive();
    if(iPassRef.current.value.trim() === iPass2Ref.current.value.trim()){
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    const heshPass = iPassRef.current.value.trim()
    const salt = 10
    bcrypt.hash(heshPass,salt,(err,hashedPassword) =>{
      if(err){
        console.log('Ошибка хеширования пароля:', err)
      }
    axios
      .post("https://oceanbackend.pythonanywhere.com/user/", {
        username: iNameRef.current.value.trim(),
        password: hashedPassword,
        email: iEmailRef.current.value.trim(),
      })
      .then((res) => {
        console.log("успешно", res.data);
        navigate("/Authorization");
      });
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
                  type="email"
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
                <button onClick={handlefunctions}>Регистрация</button>
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
