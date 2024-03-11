import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../hero/styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

function Hero() {
  const [swipers, setSwiper] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/carusel/").then((res) => {
      setSwiper(res.data);
      console.log(res);
    });
  }, []);
  return (
    <div data-aos="zoom-out" data-aos-duration="1100">
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
          {swipers.map((el, id) => (
            <SwiperSlide key={id} className="swipe">
              <h1 className="desc">{el.category}</h1>
              <img src={el.photo} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
