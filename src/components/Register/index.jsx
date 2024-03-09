import {useState} from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import registerImage from "../../assets/register.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export default function Register() {
  // const [showEnter, setShowEnter] = React.useState(false);
  const [eye,setEye] = useState('password')
  const [active,setActive] = useState(false)

  const handleEye = () => {
    if (eye === "password") {
      setEye("text");
    } else {
      setEye("password");
    }
  }
function iValue(){
  const iName = document.querySelector('.iName')
  const iPass = document.querySelector('.iPass')
  const iPass2 = document.querySelector('.iPass2')
  const iEmail = document.querySelector('.iEmail')
  if(iName.value.trim() === ''){
    iName.style.border = '1px solid red'
  }else {
    iName.style.border = '1px solid rgba(255, 255, 255, 1)'
  }
  if(iPass.value.trim() === ''){
    iPass.style.border = '1px solid red'
  }else {
    iPass.style.border = '1px solid rgba(255, 255, 255, 1)'
  }
  if(iPass2.value.trim() === ''){
    iPass2.style.border = '1px solid red'
  }else {
    iPass2.style.border = '1px solid rgba(255, 255, 255, 1)'
  }
  if(iEmail.value.trim() === ''){
    iEmail.style.border = '1px solid red'
  }else {
    iEmail.style.border = '1px solid rgba(255, 255, 255, 1)'
  }
}
  const btnActive = ()=>{
    setActive(true)
    iValue()
  }
  const validation = ()=>{
    if(active === true){
      iValue()
    }
  }


  return (
    <>
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
                    className='iName'
                  type="text"
                  placeholder="Имя"
                    onInput={validation}
                />
                <div className="register__inputs--pass">
                  <input className='iPass' type={eye} placeholder="Пароль" onInput={validation}/>
                  {
                    eye === 'password' ? <FaEyeSlash onClick={handleEye} className='passEye'/> :<FaEye onClick={handleEye} className='passEye'/>
                  }
                </div>
                <div className="register__inputs--pass">
                <input className='iPass2' type={eye} placeholder="Потвердить пароль" onInput={validation}/>
                  {
                    eye === 'password' ? <FaEyeSlash onClick={handleEye} className='passEye'/> :<FaEye onClick={handleEye} className='passEye'/>
                  }
                </div>
                <input className='iEmail' type="text" placeholder="Email или телефон ..." onInput={validation}/>
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
                <button onClick={btnActive}>Регистрация</button>
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
        </div>
    </>
  );
}
