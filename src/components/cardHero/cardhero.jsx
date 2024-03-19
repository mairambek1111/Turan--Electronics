import dyson from "../../assets/dyson.png";
import apple from "../../assets/apple.png";
import samsung from "../../assets/samsung.png";
import sonyPlayStation from "../../assets/sonyPlayStation.png";
import xiomi from "../../assets/xiomi.png";

import "./cardhero.scss";
import {Link} from "react-router-dom";

function Cardhero() {
  return (
    <div>
      <div className="container">
        <section className="cards">
          <Link to={'/brand/dyson'}><div
            className="cards__wrap__dyson"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={dyson} alt="" className="dyson" />
            <button className="Button">Dyson</button>
          </div></Link>
          <div className="cards__wrap">
            <Link to={'/brand/apple'}><div
              className="cards__wrap__apple"
              data-aos="zoom-in-up"
              data-aos-duration="1100"
            >
              <img src={apple} alt="" className="apple" />
              <button className="Button">Apple</button>
            </div></Link>
            <Link to={'/brand/samsung'}><div
              className="cards__wrap__samsung"
              data-aos="zoom-in-up"
              data-aos-duration="1100"
            >
              <img src={samsung} alt="" className="samsung" />
              <button className="Button">Samsung</button>
            </div></Link>{" "}
            <Link to={'/brand/xiomi'}><div
              className="cards__wrap__xiomi"
              data-aos="zoom-in-up"
              data-aos-duration="1100"
            >
              <img src={xiomi} alt="" className="xiomi" />

              <button className="Button">Xiomi</button>
            </div></Link>{" "}
            <Link to={'/brand/sonyPlaystation'}><div
              className="cards__wrap__sonyPlaystation"
              data-aos="zoom-in-up"
              data-aos-duration="1100"
            >
              <img src={sonyPlayStation} alt="" className="sonyPlaystation" />
              <button className="Button">Sony Playstation</button>
            </div></Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Cardhero;
