import "./userData.scss";
import Payment from "../payment/payment.jsx";
import Qrcode from "../qrcode/qrcode.jsx";
import { useRef, useState } from "react";
import Check from "../check/check.jsx";
import axios from "axios";

function UserData() {
  const [active, setActive] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [name, setName] = useState("");
  const [tel, setTel] = useState(0);
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");
  const [gorod, setGorod] = useState("");
  const [street, setStreet] = useState("");
  const [home, setHome] = useState("");
  const refGorod = useRef(null);
  const refRegion = useRef(null);
  const [oplata, setOplata] = useState(false);
  const [modal, setModal] = useState(false);

  const token = process.env.API_BOT;
  const id = process.env.API_ID;
  const siteName = "Turan Electronics";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  console.log();
  function SendData() {
    let message = `<b>Заказ с сайта: ${siteName}</b>\n \n`;
    message += `<b>Имя: ${name}</b>\n`;
    message += `<b>Телефон: ${tel}</b>\n`;
    message += `<b>Email: ${email}</b>\n`;
    message += `<b>Область: ${region}</b>\n`;
    message += `<b>Город: ${gorod}</b>\n`;
    message += `<b>Улица: ${street}</b>\n`;
    message += `<b>Дом/кв: ${home}</b>\n`;
    axios.post(url, {
      chat_id: id,
      parse_mode: "html",
      text: message,
    });
  }

  function validation() {
    const iName = document.querySelector(".userInput__firstInput");
    const iNom = document.querySelector(".userInput__phone");
    const iEmail = document.querySelector(".userInput__email");
    const iStreet = document.querySelector(".streetInput");
    const iHome = document.querySelector(".homeInput");
    setEmail(iEmail.value);
    setTel(iNom.value);
    setName(iName.value);
    setStreet(iStreet.value);
    setHome(iHome.value);
    if (iName.value.trim() === "") {
      iName.style.border = "1px solid red";
    } else {
      iName.style.border = "1px solid rgb(212, 212, 212)";
    }
    if (iNom.value.trim() === "") {
      iNom.style.border = "1px solid red";
    } else {
      iNom.style.border = "1px solid rgb(212, 212, 212)";
    }
    if (iEmail.value.trim() === "") {
      iEmail.style.border = "1px solid red";
    } else {
      iEmail.style.border = "1px solid rgb(212, 212, 212)";
    }
    if (iStreet.value.trim() === "") {
      iStreet.style.border = "1px solid red";
    } else {
      iStreet.style.border = "1px solid rgb(212, 212, 212)";
    }
    if (iHome.value.trim() === "") {
      iHome.style.border = "1px solid red";
    } else {
      iHome.style.border = "1px solid rgb(212, 212, 212)";
    }
    if (!refGorod.current?.value) {
      refGorod.current.style.border = "1px solid red";
    } else {
      refGorod.current.style.border = "1px solid rgb(212, 212, 212)";
    }
    if (!refRegion.current?.value) {
      refRegion.current.style.border = "1px solid red";
    } else {
      refRegion.current.style.border = "1px solid rgb(212, 212, 212)";
    }

    if (
      iName.value.trim() === "" ||
      iNom.value.trim() === "" ||
      iEmail.value.trim() === "" ||
      iStreet.value.trim() === "" ||
      iHome.value.trim() === "" ||
      !refGorod.current?.value ||
      !refRegion.current?.value
    ) {
      setActiveModal(false);
    } else {
      setActiveModal(true);
    }
  }

  function iValidation() {
    if (active) {
      validation();
    }
  }

  function selectRegion(e) {
    setRegion(e.target.value);
    if (e.target.value) {
      refRegion.current.style.border = "1px solid rgb(212, 212, 212)";
    }
  }

  function selectGorod(e) {
    setGorod(e.target.value);
    if (e.target.value) {
      refGorod.current.style.border = "1px solid rgb(212, 212, 212)";
    }
  }
  return (
    <>
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
            onInput={iValidation}
          />
          <div className="userInput__secondInput">
            <input
              type="number"
              placeholder="Телефон"
              className="userInput__phone"
              onInput={iValidation}
            />
            <input
              type="text"
              placeholder="Email"
              className="userInput__email"
              onInput={iValidation}
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
                <select defaultValue="" ref={refRegion} onChange={selectRegion}>
                  <option value="" hidden disabled>
                    Область
                  </option>
                  <option value="Чуй">Чуй</option>
                  <option value="Иссык-Куль">Иссык-Куль</option>
                  <option value="Нарын">Нарын</option>
                  <option value="Баткен">Баткен</option>
                  <option value="Джалал-Абад">Джалал-Абад</option>
                  <option value="Ош">Ош</option>
                  <option value="Талас">Талас</option>
                </select>

                <select defaultValue="" ref={refGorod} onChange={selectGorod}>
                  <option value="" hidden disabled>
                    Город
                  </option>
                  <option value="Бишкек">Бишкек</option>
                  <option value="Каракол">Каракол</option>
                  <option value="Нарын">Нарын</option>
                  <option value="Баткен">Баткен</option>
                  <option value="Джалал-Абад">Джалал-Абад</option>
                  <option value="Ош">Ош</option>
                  <option value="Талас">Талас</option>
                </select>
              </div>
              <div className="inputs">
                <input
                  type="text"
                  placeholder="Улица"
                  className="streetInput"
                  onInput={iValidation}
                />
                <input
                  type="text"
                  placeholder="Дом/кв"
                  className="homeInput"
                  onInput={iValidation}
                />
              </div>
            </div>

            <h1 className="userData__card__price">Бесплатно</h1>
          </div>
        </div>
      </div>
      <Payment />
      <Qrcode
        validation={validation}
        setActive={setActive}
        setOplata={setOplata}
        modal={modal}
        activeModal={activeModal}
        setModal={setModal}
        SendData={SendData}
      />
      <Check oplata={oplata} setOplata={setOplata} />
    </>
  );
}

export default UserData;
