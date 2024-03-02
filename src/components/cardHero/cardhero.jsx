import React from "react";
import dyson from "../../assets/dyson.png";
import apple from "../../assets/apple.png";
import samsung from "../../assets/samsung.png";
import sonyPlayStation from "../../assets/sonyPlayStation.png";
import xiomi from "../../assets/xiomi.png";

import "./cardhero.scss";

function Cardhero() {
    return (
        <div>
            <div className="container">
                <section className="cards">
                    <div className="cards__dyson">
                        <img src={dyson} alt="" className="dyson" />
                        <button className="Button">Dyson</button>
                    </div>
                    <div className="cards__wrap">
                        <div className="cards__wrap__apple">
                            <img src={apple} alt="" className="apple" />

                            <button className="Button">Apple</button>
                        </div>
                        <div className="cards__wrap__samsung">
                            <img src={samsung} alt="" className="samsung" />
                            <button className="Button">Samsung</button>
                        </div>{" "}
                        <div className="cards__wrap__xiomi">
                            <img src={xiomi} alt="" className="xiomi" />

                            <button className="Button">Xiomi</button>
                        </div>{" "}
                        <div className="cards__wrap__sonyPlaystation">
                            <img
                                src={sonyPlayStation}
                                alt=""
                                className="sonyPlaystation"
                            />
                            <button className="Button">Sony Playstation</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Cardhero;
