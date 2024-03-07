import "./navbtn.scss";
import iconcars from "../../assets/iconcars.svg";
import iconkluch from "../../assets/iconkluch.svg";
import iconptichka from "../../assets/iconptichka.svg";
import iconrassrochka from "../../assets/iconrassrochka.svg";

function Navbtn() {
  return (
    <>
      <section className="navbtn" data-aos="zoom-out" data-aos-duration="1100">
        <div className="container">
          <div className="navbtn__content">
            <div className="navbtn__btns">
              <button className="navbtn__btn">
                <img src={iconcars} alt="" />
                Удобная доставка
              </button>
              <button className="navbtn__btn">
                <img src={iconkluch} alt="" /> Быстросервис
              </button>
              <button className="navbtn__btn">
                <img src={iconptichka} alt="" />
                Гарантия лучшей цены
              </button>
              <button className="navbtn__btn">
                <img src={iconrassrochka} alt="" />
                Рассрочка и кредит
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbtn;
