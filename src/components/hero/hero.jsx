import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../hero/styles.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import heroTuran from "../../assets/turamHero.png";
function Hero() {
    return (
        <div>
            <div className="container">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={heroTuran} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={heroTuran} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={heroTuran} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Hero;
