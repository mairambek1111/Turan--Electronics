import React, { useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import "./swipeBasket.css";

import basketIcon from "../../assets/basket.png";
import img from "../../assets/image.png";
import { RiStarSFill } from "react-icons/ri";
import Slider from "react-slick/lib/slider";

function SwipeBasket() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 949,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="title">Аксессуары</div>
                    <div className="arrows">
                        <FaArrowLeft
                            color="rgba(255, 115, 0, 1)"
                            className="leftArrow"
                        />
                        <FaArrowRight
                            color="rgba(255, 115, 0, 1)"
                            className="rightArrow"
                        />
                    </div>
                    <div className="arrowDisplay">
                        <a href="#">Смотреть все</a>
                    </div>
                </div>
                <Slider {...settings}>
                    <div className="card">
                        <div className="stars">
                            <RiStarSFill
                                color="rgba(255, 115, 0, 1)"
                                fontSize={20}
                            />
                            <RiStarSFill
                                color="rgba(255, 115, 0, 1)"
                                fontSize={20}
                            />

                            <RiStarSFill fontSize={20} />
                            <RiStarSFill fontSize={20} />
                            <RiStarSFill fontSize={20} />
                        </div>

                        <img src={img} alt="" className="basketImage" />

                        <h3 className="basketTitle">Зарядное устройство</h3>
                        <p className="basketPrice">3500 сом</p>
                        <div className="basket">
                            <button className="btnBasket">Быстрый заказ</button>
                            <img
                                src={basketIcon}
                                alt=""
                                className="basketIcon"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="stars">
                            <RiStarSFill
                                color="rgba(255, 115, 0, 1)"
                                fontSize={20}
                            />
                            <RiStarSFill
                                color="rgba(255, 115, 0, 1)"
                                fontSize={20}
                            />

                            <RiStarSFill fontSize={20} />
                            <RiStarSFill fontSize={20} />
                            <RiStarSFill fontSize={20} />
                        </div>

                        <img src={img} alt="" className="basketImage" />

                        <h3 className="basketTitle">Зарядное устройство</h3>
                        <p className="basketPrice">3500 сом</p>
                        <div className="basket">
                            <button className="btnBasket">Быстрый заказ</button>
                            <img
                                src={basketIcon}
                                alt=""
                                className="basketIcon"
                            />
                        </div>
                    </div>{" "}
                    <div className="card">
                        <div className="stars">
                            <RiStarSFill
                                color="rgba(255, 115, 0, 1)"
                                fontSize={20}
                            />
                            <RiStarSFill
                                color="rgba(255, 115, 0, 1)"
                                fontSize={20}
                            />

                            <RiStarSFill fontSize={20} />
                            <RiStarSFill fontSize={20} />
                            <RiStarSFill fontSize={20} />
                        </div>

                        <img src={img} alt="" className="basketImage" />

                        <h3 className="basketTitle">Зарядное устройство</h3>
                        <p className="basketPrice">3500 сом</p>
                        <div className="basket">
                            <button className="btnBasket">Быстрый заказ</button>
                            <img
                                src={basketIcon}
                                alt=""
                                className="basketIcon"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="stars">
                            <RiStarSFill
                                color="rgba(255, 115, 0, 1)"
                                fontSize={20}
                            />
                            <RiStarSFill
                                color="rgba(255, 115, 0, 1)"
                                fontSize={20}
                            />

                            <RiStarSFill fontSize={20} />
                            <RiStarSFill fontSize={20} />
                            <RiStarSFill fontSize={20} />
                        </div>

                        <img src={img} alt="" className="basketImage" />

                        <h3 className="basketTitle">Зарядное устройство</h3>
                        <p className="basketPrice">3500 сом</p>
                        <div className="basket">
                            <button className="btnBasket">Быстрый заказ</button>
                            <img
                                src={basketIcon}
                                alt=""
                                className="basketIcon"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="stars">
                            <RiStarSFill
                                color="rgba(255, 115, 0, 1)"
                                fontSize={20}
                            />
                            <RiStarSFill
                                color="rgba(255, 115, 0, 1)"
                                fontSize={20}
                            />

                            <RiStarSFill fontSize={20} />
                            <RiStarSFill fontSize={20} />
                            <RiStarSFill fontSize={20} />
                        </div>

                        <img src={img} alt="" className="basketImage" />

                        <h3 className="basketTitle">Зарядное устройство</h3>
                        <p className="basketPrice">3500 сом</p>
                        <div className="basket">
                            <button className="btnBasket">Быстрый заказ</button>
                            <img
                                src={basketIcon}
                                alt=""
                                className="basketIcon"
                            />
                        </div>
                    </div>
                    <div className="card">
                        <div className="stars">
                            <RiStarSFill
                                color="rgba(255, 115, 0, 1)"
                                fontSize={20}
                            />
                            <RiStarSFill
                                color="rgba(255, 115, 0, 1)"
                                fontSize={20}
                            />

                            <RiStarSFill fontSize={20} />
                            <RiStarSFill fontSize={20} />
                            <RiStarSFill fontSize={20} />
                        </div>

                        <img src={img} alt="" className="basketImage" />

                        <h3 className="basketTitle">Зарядное устройство</h3>
                        <p className="basketPrice">3500 сом</p>
                        <div className="basket">
                            <button className="btnBasket">Быстрый заказ</button>
                            <img
                                src={basketIcon}
                                alt=""
                                className="basketIcon"
                            />
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default SwipeBasket;
