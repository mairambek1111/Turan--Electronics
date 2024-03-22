import "./brends.scss";
import Slider from "react-slick/lib/slider";
import iconadaptive from "../../assets/adaptive-apple-icon.svg";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
function Brends() {
  const [brend,setBrend] = useState([])

  const getBrend = async ()=>{
    const res = await axios(`https://oceanbackend.pythonanywhere.com/brand`)
    const {data} = await  res
    setBrend(data)
  }
  useEffect(() => {
    getBrend()
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 3300,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 949,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1022,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <div className="brends">
      <div className="container">
        <div className="brends__content">
          <div className="brends__titles">
            <h2 className="brends__title">Бренды</h2>

            <Link className="brends--title__info">Смотреть все</Link>
          </div>

          <Slider {...settings}>
            {
              brend.map(el => (
                  <button key={el.id}
                      className="brends__card"
                      data-aos="zoom-in-up"
                      data-aos-duration="1100"
                  >
                    <Link to={`/brand/${el?.brand_name}`} className="brends__image">
                      <img src={el?.photo} alt="no img"/>
                    </Link>
                    <Link className="brends__adaptive-icon">
                      <img src={iconadaptive} alt=""/>
                      <h4 className="brends__adaptive__title">Apple</h4>
                    </Link>
                  </button>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Brends;
